import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState , useEffect  } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
import {conUser} from '../actions/UsersActions'
import source from "../images/LoginPage/Logo2.png"

const LoginPage = () => {
const [name, setname] = useState("")
const [password, setpassword] = useState("")
const [valid, setvalid] = useState(false)
const [User, setUser] = useState("")
const login = useSelector(state=>state.UsersReducer)

const navigate=useNavigate()
const dispatch=useDispatch()


const connexion=()=>{
  valid?(<>{navigate("/HomePage"),
  dispatch(conUser({User:User,date:`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,time:`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}))}</>)
  :name===""||password===""?alert("Please enter your access "):alert("The username or password are incorrect")
  }

  const Check=()=>{
  
    login.initState.map((el)=>(
      el.username===name.toLocaleUpperCase() && el.Password===password?
      (setvalid(true),
      setUser(el))
      :"")) 
    }

  useEffect(() => {
     Check()
  });
  

return (
    <div style={{display:"flex" ,flexDirection:"column",justifyContent:"space-between" ,alignItems:"center", marginLeft:"auto",marginRight:"auto"}}>
   
        <img src={source} alt="logo"></img>
        <div style={{display:"flex" , fontSize:20 , fontWeight:500 ,justifyContent:"space-between",alignItems: "center"}}>
        <input style={{height:25}} onChange={(e)=>{setname(e.target.value)}} placeholder="User Name"/>
        </div>
        <div style={{display:"flex" , fontSize:20 , fontWeight:500,justifyContent:"space-between",alignItems: "center"}}>
        <input type="password" style={{height:25}} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password"/>
        </div>
        <div>
        <Button variant="danger" onKeyPress={()=>{connexion()}} onClick={()=>{connexion()}}>Connect</Button>
        </div>
 
        
    </div>
  )
}

export default LoginPage