import React, { useState, useRef } from "react";
import {
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiItalic,
  FiBold,
} from "react-icons/fi";

import { motion } from "framer-motion";
import About from "./About";
import TextComponent from "./TextComponent";
import CardComp from "./CardComp";
import BackC from "./BackC";
import FilterC from "./FilterC";
import Image1 from "../assets/img1.jpg";
import html2canvas from "html2canvas";
import Header from "./Header";
const CustomCanvas = () => {
  const quotes = useRef(null);
  const [authname, setAuthName] = useState("");
  const authorname = useRef("-Prashant");
  const backgQuotes = useRef(null);
  const captureAreaRef = useRef(null);
  const [bgImg, setbgImg] = useState({ Image1 });
  const [content, setContent] = useState(
    <TextComponent quotes={quotes} authorname={authorname} />
  );

  async function handleDownload() {
    const element = captureAreaRef.current;
    if (element) {
      const canvas = await html2canvas(element);
      const dataUrl = canvas.toDataURL("image/jpg");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "quote.png";
      link.click();
    }
  }

  return (
    <>
      <Header />
      <div className="h-[100vh] w-[100%] flex flex-row gap-10">
        <div className="h-[100vh] w-[100%] flex justify-center items-center gap-10">
          <div className=" flex flex-rows-cols-2 gap-10">
            <div className="mt-20">
              <div className="flex flex-row gap-10">
                <div
                  value="0"
                  className="bg-[#5757de] text-center p-2 w-[70px] font-extrabold"
                  onClick={() =>
                    setContent(
                      <TextComponent quotes={quotes} authorname={authorname} />
                    )
                  }
                >
                  Text
                </div>
                <div
                  value="1"
                  className="bg-[#5757de] text-center p-2 font-extrabold"
                  onClick={() =>
                    setContent(
                      <BackC
                        backgQuotes={backgQuotes}
                        bgImg={bgImg}
                        setbgImg={setbgImg}
                      />
                    )
                  }
                >
                  Background
                </div>
                <div
                  value="2"
                  className="bg-[#5757de] text-center p-2 w-[100px] font-extrabold"
                  onClick={() => setContent(<FilterC quotes={quotes} backgQuotes={backgQuotes} captureAreaRef={captureAreaRef} />)}
                >
                  Filters
                </div>
              </div>
              <div>{content}</div>
            </div>
          </div>

          <div className="border-[2px] border-black w-[60vh] h-[90vh] flex flex-col justify-items-center">
            <div ref={captureAreaRef}>
              <div
                ref={backgQuotes}
                style={{ backgroundImage: `url(${bgImg})` }}
                className=" w-[59.5vh] h-[89.5vh] text-wrap bg-no-repeat bg-cover"
              >
                <div
                  ref={quotes}
                  className="w-[59.5vh] text-wrap  font font-extrabold font-ubuntu "
                ></div>
                <div
                  ref={authorname}
                  className="w-[59.5vh] text-wrap  font font-extrabold font-ubuntu px-4"
                ></div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <motion.button
                onClick={handleDownload}
                className="p-3 bg-[#30dbf9] rounded-md font-extrabold text-[white] shadow-md"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Download
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCanvas;
