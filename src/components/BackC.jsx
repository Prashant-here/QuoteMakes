import React from 'react'
import { useState } from 'react';
import Image1 from "../assets/img1.jpg"
import Image2 from "../assets/img2.jpeg"
import Image3 from "../assets/img3.jpeg"
import Image4 from "../assets/img4.jpg"
import Image5 from "../assets/img5.jpg"
import Image6 from "../assets/img6.jpg"
import Image7 from "../assets/img7.jpg"
import Image8 from "../assets/img8.jpg"
import Image9 from "../assets/img9.jpg"
const BackC = ({backgQuotes,bgImg,setbgImg}) => {
  
  const [background,setBackground]=useState('green');
  
  function bgColorChange(e){
    backgQuotes.current.style.backgroundColor=e.target.value;
  }


   function bgChange(e){
    setBackground(e.target.value);
    backgQuotes.current.style.backgroundImage={Image1};
   }

   function setbgPic(e){
    const file=e.target.files[0];
    const imageUrl=URL.createObjectURL(file);
    setbgImg(imageUrl);
   }
   function handleSubmit(e)
   {
    console.log('bgImage run')
    setbgImg(e.target.value);
   }
  
    return (
    <>
    <div className="h-[100vh] w-[100%] flex flex-row gap-10" >
    <div className="border-[2px] border-black p-2 flex flex-col  w-[50vh] h-[80vh] ">
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 ">Background Color:</label>
    <input type="color" value={background} onChange={bgColorChange}></input>
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 "
    > Choose Your Background</label>
    <select onChange={handleSubmit} className="p-2 border-[1px] border-[#aaaaaa]">
      <option value={Image1} > Background 1 </option>
        <option value ={Image2}> Background 2</option>
        <option value ={Image3}> Background 3</option>
        <option value ={Image4}> Background 4</option>
        <option value ={Image5}> Background 5</option>
        <option value ={Image6}> Background 5</option>
        <option value ={Image7}> Background 6</option>
        <option value ={Image8}> Background 7</option>
        <option value ={Image9}> Background 9</option>
    </select>
    <button type="button" onClick={handleSubmit} className="w-[47.5vh] bg-[aqua] rounded-md mt-2 p-2 font-extrabold text-[#000000] font-lato"> Clear Background</button>
    <div className="p-2 mt-4">
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 ">Add BG Image</label>
    <input className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 " type="file" onChange={setbgPic}></input>
    </div>

   </div>
    </div>
    </>
  )
}

export default BackC
