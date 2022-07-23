import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillCloseCircle } from 'react-icons/ai'
import {useNavigate } from 'react-router-dom'
import {Deviseoptions} from './SelectOptions'
import Select from 'react-select'
import Button from 'react-bootstrap/Button';
import {useState , useEffect} from "react"
import {addCash} from '../actions/CurrentDayActions'
import { useDispatch ,useSelector } from 'react-redux'
import source from '../sound/cash-register.mp3'
import CurrenciesRate from './CurrenciesRate'

const CaisseEsp = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [Montant, setMontant] = useState(0)
    const [Devise, setDevise] = useState("")
    const [EqDt, setEqDt] = useState(0)
    const Rate=useSelector(state=>state.CurrentDayReducer.CurrenciesRate)
    const playAudio=(Audio)=>{ 
        Audio.loop = false;
        Audio.volume = 0.3;
        Audio.playbackRate=1;
        Audio.play();     
      } 
    const Eq=(devise)=>{

        return(
        setDevise(devise),
        devise==="Dinars"?
        setEqDt("")
        :devise=="Euros"?
        setEqDt((Rate.Euros*Montant).toFixed(3))
        :devise=="Dollars"?
        setEqDt((Rate.Dollars*Montant).toFixed(3))
        :
        ""
        )
    } 

    

    
    
  return (
    <div>
        <CurrenciesRate/>
         <audio id="myAudio" src={source} type="audio/mpeg"></audio>
        <p>Caisse Espèces : __________________________________________ close <AiFillCloseCircle onClick={()=>{navigate("/Register")}} style={{color:"red"}}/></p>
        <div style={{display:"flex" , flexDirection:"row" }}>
        <input type="number" onChange={(e)=>(setMontant(e.target.value),Eq(Devise))}/>
        <Select id="select" options={Deviseoptions} onChange={(e)=>(Eq(e.value))}/>
        <p>Equivalent en Dt : {EqDt} Dt .</p>
     
        <Button variant="warning" onClick={()=>(dispatch(addCash([Devise,Montant,EqDt])),
        playAudio(document.getElementById("myAudio")))}>Alimenter</Button>
        </div>
        
    
    </div>
  ) 
}

export default CaisseEsp