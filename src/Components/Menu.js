import {useNavigate,Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Header from './Header'
import source from '../images/bubble.png'
import source1 from '../sound/Bouncing.mp3'

const HomePage = () => {
const navigate=useNavigate()
const ConnectedUser = useSelector(state=>state.UsersReducer.ConnectedUser.User)
const playAudio=(Audio)=> { 
  Audio.loop = true;
  Audio.volume = 0.07;
  Audio.playbackRate=1.5;
  Audio.play();   
} 

const PauseAudio=(Audio)=> { 
  Audio.pause(); 
} 

  return (
    <div className="menu" style={{display:"flex" , flexDirection:"column" ,alignItems:"center"}}>    
         <audio id="myAudio" src={source1} type="audio/mpeg"></audio>
        <Header />      
        <div style={{visibility:ConnectedUser.Profil==="Administrator"||ConnectedUser.Profil==="Cashier"?"visible":"hidden" ,position:"absolute" ,fontSize:14, marginTop:400 , marginRight:900}} className="bubble" src={source} onMouseLeave={()=>{PauseAudio(document.getElementById('myAudio'))}} onMouseOver={()=>{playAudio(document.getElementById('myAudio'))}} onMouseDown={()=>{navigate('/Register')}}>
        <p style={{color:"#337ab7"}}>New Register</p>
        </div>

        <div style={{position:"absolute" ,fontSize:14,marginTop:500 , marginRight:600}} className="bubble" src={source} onMouseLeave={()=>{PauseAudio(document.getElementById('myAudio'))}} onMouseOver={()=>{playAudio(document.getElementById('myAudio'))}} >
        <p style={{color:"#337ab7"}}>History</p>
        </div>

        <div style={{position:"absolute" ,fontSize:14, marginTop:480 , marginRight:200}} className="bubble" src={source} onMouseLeave={()=>{PauseAudio(document.getElementById('myAudio'))}} onMouseOver={()=>{playAudio(document.getElementById('myAudio'))}} >
        <p style={{color:"#337ab7"}}>Search</p>
        </div>
        <div style={{visibility:ConnectedUser.Profil==="Administrator"||ConnectedUser.Profil==="Manager" ?"visible":"hidden" ,position:"absolute" ,fontSize:14, marginTop:420 , marginLeft:200}} className="bubble" src={source} onMouseLeave={()=>{PauseAudio(document.getElementById('myAudio'))}} onMouseOver={()=>{playAudio(document.getElementById('myAudio'))}}>
        <p style={{color:"#337ab7"}}>Banks</p>
        </div>

        <div style={{visibility:ConnectedUser.Profil==="Administrator"?"visible":"hidden" ,position:"absolute" ,fontSize:14, marginTop:320 , marginLeft:600}} className="bubble" src={source} onMouseLeave={()=>{PauseAudio(document.getElementById('myAudio'))}} onMouseOver={()=>{playAudio(document.getElementById('myAudio'))}} onMouseDown={()=>{navigate('EditUsers')}}>
        <p style={{color:"#337ab7"}}>Users settings</p>
        </div>

        <div style={{visibility:ConnectedUser.Profil==="Administrator"?"visible":"hidden" ,position:"absolute" ,fontSize:14, marginTop:200 , marginLeft:900}} className="bubble" src={source} onMouseLeave={()=>{PauseAudio(document.getElementById('myAudio'))}} onMouseOver={()=>{playAudio(document.getElementById('myAudio'))}} onMouseDown={()=>{navigate('EditCompany')}}>
        <p style={{color:"#337ab7"}}>Company settings</p>
        </div>

        <br/>  
        <Outlet/>
        <br/>

    </div>
  )
}

export default HomePage