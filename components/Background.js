import { useRef } from "react"

export const Background = () => {
  const vidref = useRef()
  
   
  
    return (
    <div className="w-[100%] h-[100vh] fixed transform scale-130 ">
        
        <video src='/video.webm' className="w-[100%] h-[100%] object-cover " autoPlay loop muted playsInline />
        
    </div>
  )
}
