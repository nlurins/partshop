import { useRef } from "react"

export const Background = () => {
  const vidref = useRef()
  
    const setPlayback = () => {
        vidref.current.playBackRate = 0.3;
  }
  
    return (
    <div className="w-[100%] h-[100vh] fixed blur scale-110 ">
        
        <video src='/video.webm' className="w-[100%] h-[100%] object-cover " autoPlay loop ref={vidref} onPlaying={() => {
            setPlayback()
        }}/>
        
    </div>
  )
}
