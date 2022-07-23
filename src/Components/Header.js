import {useState} from 'react';
import { FaUserAlt } from "react-icons/fa";
import { AiOutlinePoweroff,AiOutlineHome} from "react-icons/ai";
import { MdPublishedWithChanges } from "react-icons/md";
import { ImNotification } from "react-icons/im";
import {useSelector,useDispatch} from 'react-redux'
import {changePassword} from '../actions/UsersActions'
import {useNavigate } from 'react-router-dom'
import {Modal, Button , Form , InputGroup } from 'react-bootstrap';
import '../App.css';

const Header = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const ConnectedUser = useSelector(state=>state.UsersReducer.ConnectedUser)
    const company=useSelector(state=>state.CompanyReducer)

    return (
    <div>
    {company.Name} Cash App (develloped by Mani Elyes 07-2022)
    <FaUserAlt onClick={()=>{document.getElementById("Headermenu").classList.toggle("show-Headermenu");}}/>
    <ImNotification/>
    <div id="Headermenu" className='Headermenu' >
    <p style={{fontSize:15 , fontWeight:500}}> Hello ! {ConnectedUser.User.username}</p>
    <p style={{fontSize:10 , fontWeight:500}}> connected on {ConnectedUser.date} at {ConnectedUser.time} </p>
    <a style={{fontSize:15 , fontWeight:500 , color:"red"}}onClick={()=>{navigate("/HomePage")}}><AiOutlineHome/>Back to Home Page</a>
    <a style={{fontSize:15 , fontWeight:500 ,color:"red"}} onClick={handleShow}> <MdPublishedWithChanges/>Change Password</a> 
    <a style={{fontSize:15 , fontWeight:500 , color:"red"}}onClick={()=>{navigate("/")}}><AiOutlinePoweroff/> Deconnexion</a> 
    </div>

    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"black" }}>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <InputGroup className="mb-3">
                <InputGroup.Text>
                Old Password
                </InputGroup.Text>
                <Form.Control
                id="OldPassword" 
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="password"
             
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text>
                New Password
                </InputGroup.Text>
                <Form.Control
                id="NewPassword" 
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="password"
             
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text>
                Confirm
                </InputGroup.Text>
                <Form.Control
                id="Confirm" 
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="password"
             
                />
                </InputGroup>
                              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>{setShow(false)}}>
              Cancel
            </Button>
            <Button variant="primary" 
              onClick={()=>(document.getElementById("NewPassword").value===document.getElementById("Confirm").value && ConnectedUser.User.Password===document.getElementById("OldPassword").value?
              (handleClose(),
              dispatch(changePassword([ConnectedUser.User.username,document.getElementById("NewPassword").value])),
              alert("Password changed"))
              :
              alert("Wrong datas")
                          
              )}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      
    </div>

  )
}

export default Header