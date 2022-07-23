import { useSelector,useDispatch } from 'react-redux'
import {useNavigate,Link,Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Header from './Header';
import source from '../sound/cash-register.mp3'
import { MdOutlineAddCircle } from "react-icons/md";
import {addInvoice} from '../actions/CurrentDayActions';
import {add} from '../actions/HistoryAction';


const Register = () => {
const navigate=useNavigate()
const dispatch=useDispatch()
const playAudio=(Audio)=>{ 
    Audio.loop = false;
    Audio.volume = 0.3;
    Audio.playbackRate=1;
    Audio.play();     
  } 
let Details=useSelector(state=>state.CurrentDayReducer)
var TotalChq = 0
var TotalEsp =Number(Details.CaisseEsp.Dinars)+Number(Details.CaisseEsp.Euros.EqDt)+Number(Details.CaisseEsp.Dollars.EqDt)
var TotalDep = 0
var Recette = 0
  return (
    <div>
         <div style={{color:"white"}}>{(
       (Details.CaisseChq===""?"":Details.CaisseChq.map((el,i)=>(      
          TotalChq+=Number(el.Montant)   
        ))))} 
        {((Details.CaisseDep===""?"":Details.CaisseDep.map((el,i)=>(      
          TotalDep+=Number(el.Montant)   
        ))))}   

        {((Details.Invoices===""?"":Details.Invoices.map((el,i)=>(      
          Recette+=Number(el.Montant)   
        ))))}   
        
        </div>
    <audio id="myAudio" src={source} type="audio/mpeg"></audio>
    <Header/>
    Register of {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}
    <div style={{display:"flex" , flexDirection:"row" , justifyContent:"left"}}>
    <Button style={{margin:5}} variant="warning" onClick={()=>(playAudio(document.getElementById("myAudio")),
    navigate('CaisseEsp'))}>Caisse Espèces</Button> 
    <Button style={{margin:5}}variant="warning"onClick={()=>(playAudio(document.getElementById("myAudio")),
    navigate('CaisseChq'))}>Caisse Chèques</Button> 
    <Button style={{margin:5}}variant="warning"onClick={()=>(playAudio(document.getElementById("myAudio")),
    navigate('CaisseDep'))}>Caisse Dépenses</Button> 
    <Button style={{margin:5}}variant="success" disabled={(Recette-TotalDep-TotalEsp-TotalChq)===0?false:true} onClick={()=>{dispatch(add([`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,Details]))}}>Clôturer la journnée</Button> 
    <input value={`Balance : ${Recette-TotalDep-TotalEsp-TotalChq} TND`} disabled={true}/>
    </div>
    <Outlet/>
    <br />
    <div style={{display:"flex" , flexDirection:"row" ,textAlign:"center", justifyContent:"space-between"}}>
    <div name="Solde Physique" style={{textAlign:"left", display:"flex" , flexDirection:"column"}}>
    <p style={{textAlign:"center", color:"white",backgroundColor:"red",fontWeight:700}}>Solde Physique : {TotalEsp+TotalChq} Dt </p>
    <p id="Total1" style={{textAlign:"left", color:"White" , backgroundColor:"grey"}}>Total Caisse Espèces  : {TotalEsp} Dt  <Link style={{color:"white"}} to="DetailsEsp"> - détails - </Link> </p>
    <p id="Total1" style={{textAlign:"left", color:"White" , backgroundColor:"grey"}}>Total Caisse Chèques : {TotalChq} Dt <Link style={{color:"white"}} to="DetailsChq"> - détails - </Link> </p>
        </div>

    <div name="Dépenses">
    <p style={{textAlign:"center", color:"white",backgroundColor:"red",fontWeight:700}}>Mouvement (débit/crédit) : {TotalDep} Dt </p>
    <p style={{textAlign:"left", color:"White" , backgroundColor:"grey"}}>Dépenses  : {TotalDep} Dt  <Link style={{color:"white"}} to="DetailsDep"> - détails - </Link> </p>

     </div>
    <div name="Solde Théorique">    
    <p style={{textAlign:"center", color:"white",backgroundColor:"red",fontWeight:700}}>Solde Théorique (Détails) : {Recette} Dt </p>
    <p style={{textAlign:"left", color:"White" , backgroundColor:"grey"}}>Pièces commerciales  : {Recette} Dt </p>
    <div style={{display:"flex"}}>
    <input id={`PMontant`} placeholder="Montant pièce commerciale" ></input>
    <select id={`Type`}>
    <option hidden>Type pièce commerciale</option>
    <option>Facture</option>
    <option>Bon de Livraison</option>
    <option>Règlement</option>
    </select>
    <input id={`Référence`} placeholder="N°pièce commerciale" ></input>
    <MdOutlineAddCircle style={{fontSize:25}}
           onClick={()=>(dispatch(addInvoice([document.getElementById("PMontant").value,document.getElementById("Type").value,document.getElementById("Référence").value])))}/>
    </div>
    - détails - 
    {Details.Invoices===""?"":Details.Invoices.map((el,i)=>(
        <div key={i} style={{display:"flex" , justifyContent:"space-evently"}}>
        <input  type="number" defaultValue={el.Montant}  disabled={true} ></input>
        <input id={`Categorie${i}`} defaultValue={el.Type}  disabled={true} ></input>
        <input id={`Element${i}`} defaultValue={el.Numéro}  disabled={true} ></input>    
          {/* <AiOutlineEdit onClick={()=>{
          document.getElementById(`Montant${i}`).disabled=!document.getElementById(`Montant${i}`).disabled
          document.getElementById(`Obs${i}`).disabled=!document.getElementById(`Obs${i}`).disabled
          }}/>
          <RiSave3Fill onClick={()=>{dispatch(editDep([el.id,Number(document.getElementById(`Montant${i}`).value),document.getElementById(`Obs${i}`).value]))
        document.getElementById(`Montant${i}`).disabled=true
        document.getElementById(`Obs${i}`).disabled=true 
        }}
        />
         <TiDelete onClick={()=>{dispatch(removeDep(el.id))}}/> */}
        </div>
  
        ))} 
    </div>
    </div>
    </div>
  )
}

export default Register