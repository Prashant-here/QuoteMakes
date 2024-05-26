import React from 'react'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
    FiAlignCenter,
    FiAlignJustify,
    FiAlignLeft,
    FiAlignRight,
    FiItalic,
    FiBold,
  } from "react-icons/fi";
const TextComponent = ({quotes,authorname,authname,setAuthName}) => {
    
    function handleSlider(e)
    {
      quotes.current.style.fontSize=`${e.target.value}px`;
    }
    function handleAuthorSlider(e)
    {
      authorname.current.style.fontSize=`${e.target.value}px`;
    }

    function handleFontColor(e)
    {
      quotes.current.style.color=`${e.target.value}`;
    }

    function createAuthor(event)
    {
      authorname.current.innerText=`-${event.target.value}`;
    }
    function handleAuthorFontColor(e)
    {
      authorname.current.style.color=`${e.target.value}`;
    }

    function createQuotes(e) {
        quotes.current.innerText = e.target.value;
      }
      function doBold() {
        quotes.current.style.fontWeight = "bold";
      }
      function doUnbold() {
        quotes.current.style.fontWeight = "normal";
      }
      function doJustified() {
        quotes.current.style.textAlign = "justify";
      }
      function doCenter() {
        quotes.current.style.textAlign = "center";
      }
      function doLeft() {
        quotes.current.style.textAlign = "left";
      }
      function doRight() {
        quotes.current.style.textAlign = "right";
      }
      function doItalic() {
        quotes.current.style.fontStyle = "italic";
      }
    
      function doUnitalic() {
        quotes.current.style.fontStyle = "normal";
      }
    
      

  return (
    <>
    <div className="h-[100vh] w-[100%] flex flex-row gap-10" >
    <div className="border-[2px] border-black p-2 flex flex-col  w-[50vh] h-[80vh] ">
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 ">Type your Quote:</label>
    <textarea
      type="paragraph"
      className="border-[1px] border-grey-100 p-2"
      placeholder="Enter Quotes"
      onChange={createQuotes}
    ></textarea>
    <div className="p-2 flex flex-row gap-3 justify-center">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <FiAlignLeft
          className="h-[30px] w-[30px] border-[1px] border-black"
          onClick={doLeft}
        ></FiAlignLeft>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={doCenter}
      >
        <FiAlignCenter className="h-[30px] w-[30px] border-[1px] border-black"></FiAlignCenter>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={doRight}
      >
        <FiAlignRight className="h-[30px] w-[30px] border-[1px] border-black"></FiAlignRight>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={doJustified}
      >
        <FiAlignJustify className="h-[30px] w-[30px] border-[1px] border-black"></FiAlignJustify>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={doItalic}
        onDoubleClick={doUnitalic}
      >
        <FiItalic className="h-[30px] w-[30px] border-[1px] border-black"></FiItalic>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <FiBold
          className="h-[30px] w-[30px] border-[1px] border-black"
          onClick={doBold}
          onDoubleClick={doUnbold}
        ></FiBold>
      </motion.div>
    </div>
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 ">Author's Name</label>
    <input
      type="text"
      className="border-[1px] border-[#d0d0d0] p-2"
      placeholder="Enter Author's Name"
      onChange={createAuthor}
    ></input>
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 ">Font Size(in Px)</label>
    <input type="range" min="0" max="80" step="1" className="" onChange={handleSlider}></input>
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 ">Font Size(in Px)[Author's Name]</label>
    <input type="range" min="0" max="60" step="1" className="" onChange={handleAuthorSlider}></input>
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 ">Font Color </label>
    <input type="color" onChange={handleFontColor}></input>
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 ">Author's Font Color</label>
    <input type="color" onChange={handleAuthorFontColor}></input>
  </div>
  
     </div>
      </>
  )
}

export default TextComponent