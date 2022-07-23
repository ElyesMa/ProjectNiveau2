import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { AiFillCloseCircle } from 'react-icons/ai'
import {useNavigate,useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {editCompany} from '../actions/CompanyAction'

const EditCompany = () => {
const company=useSelector(state=>state.CompanyReducer)
const navigate=useNavigate()
const dispatch=useDispatch()
const location=useLocation()
const [disabled, setdisabled] = useState(true)

  return (
<div style={{display:"flex" , flexDirection:"column" , justifyContent:"center",textAlign:"center" , backgroundColor:"whitesmoke" , padding:20 , borderRadius:25}}>
    <p style={{backgroundColor:"grey" , color:"white"}} >Company Seetings :_________________________________________________________________________close <AiFillCloseCircle onClick={()=>{navigate("/HomePage")}} style={{color:"red",borderRadius:50,backgroundColor:"white"}}/></p>
    <div style={{display:"flex" , justifyContent:"space-between"}}>
    <p>Company Name : </p>
    <input style={{width:`${company.Name.length}em`}} id={`Name`} defaultValue={company.Name}  disabled={disabled} ></input>
    </div>

    <div style={{display:"flex" , justifyContent:"space-between"}}>
    <p>Adresse : </p>
    <input style={{width:`${company.Adresse.length}em`}} id={`Adresse`} defaultValue={company.Adresse}  disabled={disabled} ></input>
    </div>

    <div style={{display:"flex" , justifyContent:"space-between"}}>
    <p>Phone Number : </p>
    <input style={{width:`${company.PhoneNumber.length}em`}} id={`PhoneNumber`} defaultValue={company.PhoneNumber}  disabled={disabled} ></input>
    </div>

    <div style={{display:"flex" , justifyContent:"space-between"}}>
    <p>Tax identification : </p>
    <input style={{width:`${company.Taxidentification.length}em`}} id={`Taxidentification`} defaultValue={company.Taxidentification}  disabled={disabled} ></input>
    </div>

    <div style={{display:"flex" , justifyContent:"space-between"}}>
    <p>URL LOGO : </p>
    <input style={{width:`${company.Taxidentification.length}em`}} id={`Url`} defaultValue={company.Url}  disabled={disabled} ></input>
    </div>

    <div style={{display:"flex" , justifyContent:"space-evenly" }}>
    <Button variant="warning" onClick={()=>{setdisabled(!disabled)}}>Edit</Button>
    <Button variant="warning" onClick={()=>{dispatch(editCompany([document.getElementById("Name").value,document.getElementById("Adresse").value,document.getElementById("PhoneNumber").value,document.getElementById("Taxidentification").value,document.getElementById("Url").value]))
    setdisabled(true)
    }}>Save</Button>

    
    </div>

  
</div>
  )
}

export default EditCompany