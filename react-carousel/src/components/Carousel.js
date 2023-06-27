import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.png";
import img5 from "../images/img5.jpg";
import styles from "./Carousel.module.css";




const Carousel = (props) => {

    const IMAGE_DETAILS = [
        { id: 0, path: img1, description: "Food1" },
        { id: 1, path: img2, description: "Food2" },
        { id: 2, path: img3, description: "Food3" },
        { id: 3, path: img4, description: "Food4" },
        { id: 4, path: img5, description: "Food5" },
      ];
    
    const filteredImage = IMAGE_DETAILS.find((img)=>img.id===props.imgIndex)
    return(
       <img src={filteredImage.path} alt={filteredImage.description}/>
     )

}

export default Carousel;




