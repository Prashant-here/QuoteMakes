import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <div className=" mt-10 h-fit-content w-[100%] ">
    <Header />
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
    </div>
  )
}

export default About