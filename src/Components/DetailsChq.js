import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { AiOutlineEdit , AiFillCloseCircle } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'
import { RiSave3Fill } from 'react-icons/ri'
import Select from 'react-select'
import { editChq,removeChq } from '../actions/CurrentDayActions'

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
        <p>Détails Caisse Chèques : __________________________________________ close <AiFillCloseCircle onClick={()=>{navigate("/Register")}} style={{color:"red"}}/></p>
        {Details.CaisseChq===""?"":Details.CaisseChq.map((el,i)=>(
        <div key={i} style={{display:"flex" , justifyContent:"space-evently"}}>
        <input id={`Montant${i}`} type="number" defaultValue={el.Montant}  disabled={true} ></input>
        <input id={`Numéro${i}`} defaultValue={el.Numéro}  disabled={true} ></input>
        <input id={`Tiré${i}`} defaultValue={el.Tiré}  disabled={true} ></input>    
        {Show===false?  <Select id={`Banque${i}`}  isDisabled={false} styles={customStyles} isSearchable={true} defaultValue={{ label: el.Banque, value: el.Banque }} options={ListBank} onChange={(e)=>( setBank({...Bank, [el.id]: e.value}))}/>:(
        <Select id={`Banque${i}`}  isDisabled={true} styles={customStyles} isSearchable={true} defaultValue={{ label: el.Banque, value: el.Banque }} options={ListBank} onChange={(e)=>( setBank({...Bank, [el.id]: e.value}))}/>
        )}
        <input id={`Echéance${i}`} defaultValue={el.Echéance} type="date"  disabled={true}></input>
          <AiOutlineEdit onClick={()=>{
          document.getElementById(`Montant${i}`).disabled=!document.getElementById(`Montant${i}`).disabled
          document.getElementById(`Numéro${i}`).disabled=!document.getElementById(`Numéro${i}`).disabled
          document.getElementById(`Tiré${i}`).disabled=!document.getElementById(`Tiré${i}`).disabled
          setShow(!Show)
          document.getElementById(`Echéance${i}`).disabled=!document.getElementById(`Echéance${i}`).disabled
          }}/>
          <RiSave3Fill onClick={()=>{dispatch(editChq([el.id,Number(document.getElementById(`Montant${i}`).value),document.getElementById(`Numéro${i}`).value,document.getElementById(`Tiré${i}`).value,Bank[el.id],document.getElementById(`Echéance${i}`).value]))
        document.getElementById(`Montant${i}`).disabled=true
        document.getElementById(`Numéro${i}`).disabled=true
        document.getElementById(`Tiré${i}`).disabled=true
        document.getElementById(`Echéance${i}`).disabled=true    
        }}
        />
         <TiDelete onClick={()=>{dispatch(removeChq(el.id))}}/>
        </div>
  
        ))} 
    </div>
  )
}

export default DetailsChq