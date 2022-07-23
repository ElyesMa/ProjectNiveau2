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
    <div style={{display:"flex" , flexDirection:"column" ,alignItems:"center"}}>    
         <audio id="myAudio" src={source1} type="audio/mpeg"></audio>
        <Header />
        <Button variant="danger" style={{width:170,visibility:ConnectedUser.Profil==="Administrator"||ConnectedUser.Profil==="Cashier"?"visible":"hidden"}} onClick={()=>{navigate('/Register',)}}>New Register</Button> 
        <br/>
        <Button variant="danger"style={{width:170}} onClick={()=>{navigate('/History',)}}>History</Button> 
        <br/>
        <Button variant="danger"style={{width:170}}>Search</Button> 
        <br/>
        <Button variant="danger" style={{width:170,visibility:ConnectedUser.Profil==="Administrator"||ConnectedUser.Profil==="Manager" ?"visible":"hidden"}}>Banks</Button> 
        <br/>
        <Button variant="danger" style={{width:170,visibility:ConnectedUser.Profil==="Administrator"?"visible":"hidden"}}>Statistics</Button> 
        <br/>  
        <Button variant="danger" style={{width:170,visibility:ConnectedUser.Profil==="Administrator"?"visible":"hidden"}} onClick={()=>{navigate('EditUsers')}}>Users settings</Button> 
        <br/>  
        <Button variant="danger" style={{width:170,visibility:ConnectedUser.Profil==="Administrator"?"visible":"hidden"}}  onClick={()=>{navigate('EditCompany')}}>Company settings</Button> 
        <br/>  
        <Outlet/>
        <br/>
    </div>
  )
}

export default HomePage