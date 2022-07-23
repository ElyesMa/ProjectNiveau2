import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { AiOutlineEdit , AiFillCloseCircle } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'
import { RiSave3Fill } from 'react-icons/ri'
import { editChq,removeChq ,editDep,removeDep} from '../actions/CurrentDayActions'

const DetailsChq = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const ListBank=useSelector(state=>state.BankReducer)
    let Details=useSelector(state=>state.CurrentDayReducer)
    const [Bank, setBank] = useState([])
    const [Show, setShow] = useState([])
    const customStyles = {

      option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 0,
        
      }),
      control: () => ({
        width: 200,
        height:10,
      }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
    
        return { ...provided, opacity, transition };
      }
    }

  return (

 
    <div>
        <p>Détails Caisse Dépenses : __________________________________________ close <AiFillCloseCircle onClick={()=>{navigate("/Register")}} style={{color:"red"}}/></p>
        {Details.CaisseDep===""?"":Details.CaisseDep.map((el,i)=>(
        <div key={i} style={{display:"flex" , justifyContent:"space-evently"}}>
        <input id={`Montant${i}`} type="number" defaultValue={el.Montant}  disabled={true} ></input>
        <input id={`Categorie${i}`} defaultValue={el.Categorie}  disabled={true} ></input>
        <input id={`Element${i}`} defaultValue={el.Element}  disabled={true} ></input>    
        <input id={`SELement${i}`} defaultValue={el.SELement}  disabled={true} ></input>    
        <input id={`Obs${i}`} defaultValue={el.Obs}  disabled={true} ></input>    
          <AiOutlineEdit onClick={()=>{
          document.getElementById(`Montant${i}`).disabled=!document.getElementById(`Montant${i}`).disabled
          document.getElementById(`Obs${i}`).disabled=!document.getElementById(`Obs${i}`).disabled
          }}/>
          <RiSave3Fill onClick={()=>{dispatch(editDep([el.id,Number(document.getElementById(`Montant${i}`).value),document.getElementById(`Obs${i}`).value]))
        document.getElementById(`Montant${i}`).disabled=true
        document.getElementById(`Obs${i}`).disabled=true 
        }}
        />
         <TiDelete onClick={()=>{dispatch(removeDep(el.id))}}/>
        </div>
  
        ))} 
    </div>
  )
}

export default DetailsChq