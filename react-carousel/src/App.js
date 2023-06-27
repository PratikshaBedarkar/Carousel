import { useState } from "react";
import Carousel from "./components/Carousel";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import styles from "./App.module.css";

function App() {
 

  const [imgIndex, setImgIndex] = useState(0)

  function previousHandler(){
    setImgIndex((prevIndex)=>{return (prevIndex-1===-1?4:prevIndex-1)})
    console.log(imgIndex)

  }

  function afterHandler(){
    setImgIndex((prevIndex)=>{return ((prevIndex+1)%5)})

  }

  return (
    <>
     <h2>Image Carousel</h2>
    <div className={styles.container}>
      <button type="button" onClick={previousHandler}>
        <VscArrowLeft size={60} className={styles.icon}/>
      </button>
      <Carousel imgIndex={imgIndex}/>
      <button type="button" onClick={afterHandler}>
        <VscArrowRight size={60} className={styles.icon}/>
      </button>
    </div>
    </>
  );
}

export default App;
