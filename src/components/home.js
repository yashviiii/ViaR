import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { db } from "../firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  const [memories,setMemories] = useState([]);
  const collectionRef = collection(db, "Memories");
  useEffect(() => {
    const getMemories = async () => {
      const data = await getDocs(collectionRef);
      setMemories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMemories();
  }, []);
  const renderSlides = memories.map((memory) => (
    <div key={memory.id}>
      <img src={memory.Image} />
      <p className="legend">{memory.Title}</p>
    </div>
  ));
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="App">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={memories[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
  
  // return (
  //   <div className="d-flex flex-column py-4 align-items-center m-auto justify-content-center">
  //     <div className="md-6 m-auto">
  //           <img
  //             className="card-img-top mb-5 mb-md-0"
  //             src={memories[0].Image}
  //             alt="..."
  //           />
  //         </div>
  //         <div className="md-6">
  //           {/* <div className="small mb-1">SKU: BST-498</div>  */}
  //           <h2 className="display-5 fw-bolder">Title</h2>
  //         </div>
  //   </div>
  // );
}