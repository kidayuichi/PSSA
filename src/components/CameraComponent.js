import React, { useState, useEffect, useRef } from "react";
import "../styles/CameraComponent.css";

export default function CameraComponent() {
  const videoRef = useRef(null);
  const [CameraFlag, setCameraFlag] = useState(false);

  useEffect(() => {
    // カメラの起動
    navigator.mediaDevices
      .getUserMedia({ video: CameraFlag })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        console.log("カメラ起動しました。");
      })
      .catch((error) => {
        console.error("カメラの起動に失敗しました。", error);
      });

    // コンポーネントのアンマウント時にカメラを停止する
    return () => {
      const videoElement = videoRef.current;

      if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }
      videoRef.current.srcObject = null;
    };
  }, [CameraFlag]);

  const cameraSwitch = () => {
    if (CameraFlag) {
      setCameraFlag(false);
    } else {
      setCameraFlag(true);
    }
  };

  return (
    <>
      <video className="video" ref={videoRef} autoPlay />
      <div className="cameraButton">
        <button onClick={cameraSwitch}>カメラ起動</button>
      </div>
    </>
  );
}
