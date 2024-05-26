import React from 'react'
import { FaFacebook, FaInstagram,  FaPinterest ,FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="w-[100%] h-fit-content ">
      <div className="bg-[#001f6d] p-10">
      <div className=" w-[100%] h-fit-content flex flex-row justify-center items-center gap-10 ">
      <FaFacebook style={{fill:'white', height:'30px', width:'30px'}}></FaFacebook>
      <FaInstagram style={{fill:'white', height:'30px', width:'30px'}}></FaInstagram>
      <FaPinterest style={{fill:'white', height:'30px', width:'30px'}}></FaPinterest>
      <FaLinkedin style={{fill:'white', height:'30px', width:'30px'}}></FaLinkedin>
      </div>
           
      </div>
    </div>
  )
}

export default Footer