import React from 'react'
import HomeImage from "../assets/background_bg.jpg"
import Logo from "../assets/logo_img.png"
import About from './About'
import {motion} from 'framer-motion'
import Example from './Example'
import Footer from './Footer'
import Header from './Header'
const HomePage = () => {
  return (
    <>
        <div className="bg-cover h-[80vh] w-[100%]" style={{ backgroundImage:`url(${HomeImage})`}} >
        <Header></Header>
          <div className="w-[100%] h-[80vh] flex font-extrabold justify-center items-center font-lato "> 
            <h1 className="text-[60px] text-center text-[#182f60]">Create Inspiring Quotes <br></br> in Seconds with QuotesMake</h1>
          </div>
        </div>
        <div className="ml-10 mt-20 mr-10">
        <div className="text-[40px] font-ubuntu font-bold text-[black] flex flex-col gap-10"  > ABOUT QUOTESMAKES
        </div>
        <div className="h-fitcontent w-[100%] flex flex-col gap-10 mt-10">
        
        <div className="h-fit-content w-fit-content text-[30px]  text-[#013571] font-bold underline">Inspiring Creativity, One Quote at a Time </div>
        <p className="text-[black] text-[20px] text-justify ">Welcome to QuotesMaker, your ultimate destination for crafting and sharing inspirational quotes. Whether you're looking to motivate yourself, inspire others, or simply express your thoughts creatively, QuotesMaker is here to help you turn words into powerful messages.</p>


        <div className="h-fit-content w-fit-content text-[30px] text-[#013571] font-bold underline">What is QuotesMaker? </div>
        <p className="text-[black] text-[20px] text-justify ">QuotesMaker is an intuitive and user-friendly platform designed to empower individuals to create beautiful, impactful quotes effortlessly. Our mission is to provide a space where creativity meets simplicity, allowing you to focus on the message you want to convey without any hassle.</p>
        </div>
        </div>
    <Example ></Example>
    <Footer></Footer>
    </>
  )
}

export default HomePage