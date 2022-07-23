import {useSelector , useDispatch} from 'react-redux'
import { AiOutlineEdit , AiFillCloseCircle } from 'react-icons/ai'
import { RiSave3Fill } from 'react-icons/ri'
import { MdOutlineAddCircle } from "react-icons/md";
import {editUser , addUser} from '../actions/UsersActions'
import {useNavigate , useLocation } from 'react-router-dom'
const EditUsers = () => {
  let users=useSelector(state=>state.UsersReducer)
  const location=useLocation()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const check=(name)=>{
    let checked=false
     users.initState.map((el,i)=>(
      el.username===name.toLocaleUpperCase()?checked=true:""
    ))
    return(checked)
  }
  return (
    <div style={{backgroundColor:"white",display:"flex" , flexDirection:"column" , justifyContent:"center",textAlign:"center"}}>
    <p>List of users : __________________________________________ close <AiFillCloseCircle onClick={()=>{navigate("/HomePage")}} style={{color:"red"}}/></p>
    {users.initState.map((el,i)=>(
    <div key={i} style={{display:"flex" , justifyContent:"space-between"}}>
    <input id={`username${i}`} defaultValue={el.username}  disabled={true} ></input>
    <select id={`Profil${i}`} defaultValue={el.Profil}  disabled={true}>
    <option>Administrator</option>
    <option>Manager</option>
    <option>Cashier</option>
    </select>
    <input id={`Password${i}`} defaultValue={el.Password}  disabled={true}></input>
    <AiOutlineEdit onClick={()=>{
    document.getElementById(`Profil${i}`).disabled=!document.getElementById(`Profil${i}`).disabled
    document.getElementById(`Password${i}`).disabled=!document.getElementById(`Password${i}`).disabled
    }}/>
    <RiSave3Fill onClick={()=>{dispatch(editUser([document.getElementById(`username${i}`).value,document.getElementById(`Profil${i}`).value,document.getElementById(`Password${i}`).value]))
    document.getElementById(`Profil${i}`).disabled=true
    document.getElementById(`Password${i}`).disabled=true}}/>
    </div>
    ))} 
    <p>Add a new user :</p>
    <div style={{display:"flex"}}>
    <input id={`newusername`} ></input>
    <select id={`newuserProfil`}>
    <option></option>
    <option>Administrator</option>
    <option>Manager</option>
    <option>Cashier</option>
    </select>
    <input id={`newuserPassword`}></input>
    <MdOutlineAddCircle onClick={()=>{
    (document.getElementById(`newusername`).value!="" & document.getElementById(`newuserProfil`).value!="" & document.getElementById(`newuserPassword`).value!="")?  check(document.getElementById(`newusername`).value)===false?
    (<>{dispatch(addUser([document.getElementById(`newusername`).value.toLocaleUpperCase(),document.getElementById(`newuserProfil`).value,document.getElementById(`newuserPassword`).value])),
    document.getElementById(`newusername`).value="",
    document.getElementById(`newuserProfil`).value="",
    document.getElementById(`newuserPassword`).value="" 
    }</>)
    :
    alert("this User already exist")
    :
    alert("All fields must be filled")
    
    }}/>
    </div>

    </div>
  )
}

export default EditUsers