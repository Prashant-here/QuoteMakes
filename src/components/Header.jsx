import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="w-[100%]">
    <header className="flex flex-row p-5 mx-auto ">
            <Link to="/"><div className="text-[#242486] text-[40px] font-extrabold "> QR</div></Link>
            <div className="flex flex-row justify-end w-[100%] gap-10 p-4" >
          <Link to="/">  <motion.div className="text-[#242486] text-[20px]  "> Home</motion.div></Link>
            <Link to="/quotemaker"><div className="text-[#242486] text-[20px]  ">
            <a href="./QuoteTemplate">Quotes Maker</a> </div></Link>
            <Link to="/About"><div className="text-[#242486] text-[20px]  "> About </div></Link>
            </div>
        </header>
    </div>
  )
}

export default Header