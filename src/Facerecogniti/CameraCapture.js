import React from 'react'
import videos from '../Videosection/FRDemo.mp4'
import  '../Facerecogniti/Camera.css'
import fundingone from '../Assets/fundingone.png'
import fundingtwo from '../Assets/fundingtwo.png'

function CameraCapture() {
  return (
    <>
    <div className='home-section-div'>
    <div className='navbar-section'>
      <div style={{display:"flex",flexDirection:"row",gap:"5px",textAlign:"center",alignItems:"center"}}>
      <div>
        <img src={fundingone} alt='face-icon' style={{width:"40px",height:"40px",objectFit:"cover"}} />
      </div>
      <div className='navbar-text'>
        FACE.AI
      </div>
      </div>
    </div>
      <div >
        <div className='home-parent-div'>
        <div className='home'>
         
      <div className='input-text-section' >
       
      
        <div className='image-text-parent-div-container'>
          <div>
        <img src={fundingtwo}  alt="face-icon" style={{width:"80px",height:"130px",objectFit:"cover",borderRadius:"10px"}}/>
        </div>
        <div>
        <div style={{fontWeight:"700",color:"#5E413A"}} className='face-section'>Face </div>
        <div style={{fontWeight:"700",color:"#5E413A"}} className='recognition-section'>Recognition</div>
        <div style={{fontWeight:"600",color:"#7D635C"}} className='description-section'>Our Face Recognition platform offers unmatched security and convenience, redefining access control and identity verification for businesses and organizations</div>
        </div>
        </div>
        <div>

        </div>
       </div>
       
       
        
      <div className='videosection'  >
        
      <video controls className='videocontrols' >
        <source src={videos} type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default CameraCapture
