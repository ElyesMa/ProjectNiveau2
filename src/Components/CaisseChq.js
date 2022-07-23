import {AiFillCloseCircle } from 'react-icons/ai'
import {useNavigate } from 'react-router-dom'
import { MdOutlineAddCircle } from "react-icons/md";
import { useDispatch ,useSelector } from 'react-redux';
import { useState } from 'react';
import Select from 'react-select'
import {addChq} from '../actions/CurrentDayActions'

const CaisseChq = () => {
    const navigate=useNavigate()
    const ListBank=useSelector(state=>state.BankReducer)
    const dispatch=useDispatch()
    const [Bank, setBank] = useState("")
    const playAudio=(Audio)=>{ 
      Audio.loop = false;
      Audio.volume = 0.3;
      Audio.playbackRate=1;
      Audio.play();     
    } 
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 0,
      }),
      control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 300,
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
          <p>Caisse Chèques : __________________________________________ close <AiFillCloseCircle onClick={()=>{navigate("/Register")}} style={{color:"red"}}/></p>
          <div style={{display:"flex" , flexDirection:"row" }}>
        <input id="ChqAmmount" type="number" placeholder='Montant du chèque'/>
        <input id="ChqNum" maxLength="7" placeholder='numéro chèque'/>
        <input id="ChqTire" placeholder='Tiré'/>
        <Select placeholder='Banque' isSearchable={true}  styles={customStyles} id="select" options={ListBank} onChange={(e)=>(setBank(e.value))}/>
        <input id="date" type="date" placeholder='échéance'/>
        <MdOutlineAddCircle style={{fontSize:40}}
        onClick={()=>(dispatch(addChq([document.getElementById("ChqAmmount").value,document.getElementById("ChqNum").value,document.getElementById("ChqTire").value,document.getElementById("date").value,Bank])),
        playAudio(document.getElementById("myAudio")))}/>
        </div>
     </div>
  )
}

export default CaisseChq