import { useRef, useState } from "react";
import Webcam from "react-webcam";


function App() {
  const webRef = useRef(null);
  const [img, setImg] = useState(null);

  const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user",
  };

  const showImage = () => {
    setImg(webRef.current.getScreenshot());
  }

  const handleDelete = () => {
    setImg(null);
  }

  return (
    <>
      <p>React Webcam</p>

      <Webcam ref={webRef} videoConstraints={videoConstraints}/>

      <button onClick={() => {showImage()}}>Show Image in console</button>
      <div className="img">
        <img src={img} alt="image" />
      </div>
      <button onClick={() => handleDelete()}>Delete Image</button>
    </>
  )
}

export default App
