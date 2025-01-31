import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";


function App() {
  const webRef = useRef(null);
  const [img, setImg] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

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

      <Link to={'/webcam'}>Second webcam</Link>

      <Webcam ref={webRef} videoConstraints={videoConstraints} audio={false}/>

      <button onClick={() => {showImage()}}>Show Image in console</button>
      <div className="img">
        <img src={img} alt="image" />
      </div>
      <button onClick={() => handleDelete()}>Delete Image</button>
    </>
  )
}

export default App
