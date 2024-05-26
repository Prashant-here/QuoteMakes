import React from 'react'


const FilterC = ({quotes,backgQuotes,captureAreaRef}) => {


 function handleSelect(e){
  quotes.current.style.fontFamily=e.target.value;
 }
 
 function handleOpacity(e){
  backgQuotes.current.style.filter=`opacity(${e.target.value}%)` ;
 }
 function handleGrayscale(e){
  backgQuotes.current.style.filter=`grayscale(${e.target.value}%)` ;
 }
 function handleContrast(e){
  captureAreaRef.current.style.filter=`contrast(${e.target.value}%)` ;
 }
 function handleBrightness(e){
  captureAreaRef.current.style.filter=`brightness(${e.target.value}%)` ;
 }







  return (
    <div className="h-[100vh] w-[100%] flex flex-row gap-10" >
    <div className="border-[2px] border-black p-2 flex flex-col  w-[50vh] h-[80vh] ">
    <div className="flex flex-col gap-2">
    <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 " >Choose Your Font:</label>
    <select className="p-2" onChange={handleSelect}>
    <option>Lato</option>
    <option>Ubuntu</option>
    <option>Rowdies</option>
    <option>Permanent Marker</option>
    <option>Satisfy</option>
    <option>Cinzel</option>                
    <option>Acme</option>
    <option>Goldman</option>                
    </select>
    </div>
    <div className=" mt-4 flex flex-col gap-2">
      <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 ">Opacity</label>
      <input type="range" min="0" max="100" className="w-[100%]" onChange={handleOpacity} ></input>
      <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 " >Grayscale</label>
      <input type="range" min="0" max="100" className="w-[100%]" onChange={handleGrayscale} ></input>
      <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 " onChange={handleContrast}>Contrast</label>
      <input type="range" min="0" max="100" className="w-[100%]" onChange={handleContrast} ></input>
      <label className="text-[#8f47ee] font-ubuntu font-extrabold text-[20px] p-3 " >Brightness</label>
      <input type="range" min="0" max="100" className="w-[100%]" onChange={handleBrightness} ></input>
    </div>
    </div>
    </div>
  )
}

export default FilterC