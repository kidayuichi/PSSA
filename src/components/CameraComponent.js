import React, { useState, useEffect, useRef } from "react";
import "../styles/CameraComponent.css";
import CardLists from "./CardLists";

const apiKey = process.env.REACT_APP_API_KEY;

export default function CameraComponent(props) {
  const { onData } = props;
  const [result, setResult] = useState("");

  const videoRef = useRef(null);
  const [cameraFlag, setCameraFlag] = useState(false);

  useEffect(() => {
    let stream = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        console.log("カメラ起動しました。");
      } catch (error) {
        console.error("カメラの起動に失敗しました。", error);
      }
    };

    if (cameraFlag) {
      startCamera();
    } else {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        console.log("カメラ停止しました。");
      }
      videoRef.current.srcObject = null;
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraFlag]);

  const toggleCamera = () => {
    setCameraFlag(!cameraFlag);
  };

  const captureImage = async () => {
    const videoElement = videoRef.current;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    context.drawImage(
      videoElement,
      0,
      0,
      videoElement.videoWidth,
      videoElement.videoHeight
    );

    const dataURL = canvas.toDataURL("image/jpeg");
    // console.log(dataURL);
    // console.log(dataURL.split(",")[1]);

    const requestPayload = {
      requests: [
        {
          image: {
            content: dataURL.split(",")[1],
          },
          features: [
            {
              type: "DOCUMENT_TEXT_DETECTION",
              maxResults: 5,
            },
          ],
          imageContext: {
            languageHints: ["en"],
          },
        },
      ],
    };

    try {
      const response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestPayload),
        }
      );
      const data = await response.json();
      console.log("Vision APIのレスポンス:", data);
      onData(data);
      if (data.responses && data.responses[0].fullTextAnnotation) {
        setResult(data.responses[0].fullTextAnnotation.text.slice(-30));
      }
    } catch (error) {
      console.error("リクエストの送信に失敗しました。", error);
    }
  };

  return (
    <>
      <div>
        <video ref={videoRef} autoPlay />
      </div>
      <div className="cameraButton">
        <button onClick={toggleCamera}>
          {cameraFlag ? "カメラ停止" : "カメラ起動"}
        </button>
      </div>
      <div className="sendButton">
        <button onClick={captureImage}>画像送信</button>
      </div>
      <div className="buttonContain">
        <input placeholder="読み取り結果" value={result} />
        <button className="picSendData">データ登録</button>
      </div>
    </>
  );
}
