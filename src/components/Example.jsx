import React from 'react'
import Image1 from '../assets/quote.png'
import Image2 from '../assets/quote1.png'
import Image3 from '../assets/quote3.png'
const Example = () => {
  return (
    <div className="h-[100vh] w-[100%]   flex flex-col items-center mt-[110px]">
    <div className="flex flex-col items-center">
        <div className="text-[#003887] text-[40px] font-bold">
            Quote Images Sample
        </div>
        <p className="font-ubuntu text-[#1f427f]">Latest collection of quotes images created using our quote maker.</p>
        <div className="w-[100%] flex mt-8 flex-row gap-10 ">
          <div>
            <img src={Image1} className="h-[550px] w-[380px]"></img>
          </div>
          <div>
            <img src={Image2} className="h-[550px] w-[380px]"></img>
          </div>
          <div>
            <img src={Image3} className="h-[550px] w-[380px]"></img>
          </div>

        </div>
    </div>
    </div>
  )
}

export default Example