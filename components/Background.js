import { useRef } from "react"

export const Background = () => {
  const vidref = useRef()
  
   
  
    return (
    <div className="w-[100%] h-[100vh] fixed transform scale-110 bg-gradient-to-r  from-[#070707f3] to-[#070707e1] min-h-screen ">
        
        <video src='/video.webm' className="w-[100%] h-[100%] object-cover hidden md:block " autoPlay loop muted playsInline />
        
    </div>
  )
}
