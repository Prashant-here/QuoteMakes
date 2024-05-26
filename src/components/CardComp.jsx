import React from 'react'

const CardComp = () => {
  return (
    <>
     <div className="h-[100vh] w-[100%]">
      <div className="h-[100vh] w-[100%] flex justify-center items-center">
        <div className=" flex flex-rows-cols-2 gap-10">
          <div>
            <div className="flex flex-row gap-10">
              <div
                value="0"
                className="bg-[#5757de] text-center p-2 w-[70px] font-extrabold"
              onClick={()=>setContent(<CardComp />)}
              
              
              
              >
                Text
              </div>
              <div
                value="1"
                className="bg-[#5757de] text-center p-2 font-extrabold"
                onClick={()=>setContent(<BackC />)}
              >
                Background
              </div>
              <div
                value="2"
                className="bg-[#5757de] text-center p-2 w-[100px] font-extrabold"
                onClick={()=>setContent(<FilterC />)}
              >
                Filters
                
              </div>
              
            </div>
            <div>
                 
                </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default CardComp