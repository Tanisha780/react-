import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const[position,setPosition]=useState({});
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
     console.log("mouse moved")
     let xPosition = e.clientX;
     let yPosition= e.clientY;
     setPosition({X:xPosition, Y:yPosition})
    })
    
  },[])
  
  return (
    <div>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/040/707/474/small_2x/ai-generated-beautiful-home-exterior-in-evening-with-glowing-interior-lights-and-landscaping-photo.jpg" />
      <h1>{position.X}/{position.Y}</h1>
    </div>
  );
};

export default Home;