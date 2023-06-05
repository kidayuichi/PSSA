import { useState } from "react"
import { createWorker } from 'tesseract.js';

// 画像のOCR処理ステータス
const STATUSES = {
  IDLE: "",
  FAILED: "OCR処理に失敗しました。",
  PENDING: "OCR処理中...",
  SUCCEEDED: "OCR処理完了",
}

function OcrReader({onReadOcrData, onRemoveClicked}) {
    const [selectedImage, setSelectedImage] = useState(null)
    const [ocrState, setOcrState] = useState(STATUSES.IDLE)
    
    // 画像のOCR処理
    const readImageText = async () => {
        const worker = new createWorker();
        try {
          setOcrState(STATUSES.PENDING)
          await worker.load();
          await worker.loadLanguage('eng');
          await worker.initialize('eng');
          const { data: { text } } = await worker.recognize(selectedImage);
          await worker.terminate();
          // オプション: スペースを削除
          const strippedText = text.replace(/\s+/g, "");
          onReadOcrData(strippedText);
          setOcrState(STATUSES.SUCCEEDED);
        } catch (err) {
          console.error(err);
          setOcrState(STATUSES.FAILED);
        }
      };
      
    // 別の画像を使用するボタンを押した時の処理
    const handleRemoveClicked = () => {
        setSelectedImage(null)
        onRemoveClicked()
        setOcrState(STATUSES.IDLE)
    }
    return (
        <div>
          {selectedImage && (
            <div>
              <img src={URL.createObjectURL(selectedImage)} alt="scanned file"  />
            </div>
          )}
          <div>
            {selectedImage?
              <div className="button-container">
                <button onClick={readImageText}>画像をOCR処理する</button>
                <button
                  className="remove-button"
                  disabled={ocrState === STATUSES.PENDING}
                  onClick={handleRemoveClicked}
                >
                    別の画像を使用する
                </button>
              </div>
              :
              <>
                <p>画像ファイルをアップロードしてください。</p>
                <input
                  type="file"
                  name="ocr-image"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                    console.log("AAAAAAAAAA")
                    console.log(event.target.files[0]);
                  }}
                />
                <p>対応フォーマット:bmp、jpg、png、pbm</p>
              </>
            }
          </div>
          <div className="status">
            {ocrState}
          </div>
          <br />
        </div>
      )
  }

export default OcrReader