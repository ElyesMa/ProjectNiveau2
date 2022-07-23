import {AiFillCloseCircle } from 'react-icons/ai'
import {useNavigate } from 'react-router-dom'
import {useSelector,useDispatch } from 'react-redux';
import Select from 'react-select'
import { MdOutlineAddCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import {useState} from 'react'
import {Modal, Button } from 'react-bootstrap';
import { addElement} from '../actions/DepActions';
import { addDep } from '../actions/CurrentDayActions';

const CaisseDep = () => {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate=useNavigate()
    const playAudio=(Audio)=>{ 
      Audio.loop = false;
      Audio.volume = 0.3;
      Audio.playbackRate=1;
      Audio.play();     
    } 
  const Categories=[]
  const Elements=[]
  const SElements=[]
  const [SelectCategorie, setSelectCategorie] = useState({index:0,value:"-"})
  const [SelectElements, setSelectElements] = useState({index:0,value:"-"})
  const [SelectedCategories, setSelectedCategories] = useState()
  const [SelectedElements, setSelectedElements] = useState()
  const [SelectedSElements, setSelectedSElements] = useState()

  const SetOptions=(state,nature)=>{ 
   state===""? nature[nature.length]= {"value": "-" , "label": "-"}:(  
    state.map( (el,i ) => {
      Object.entries(el).map(([key, value]) => {
        nature[nature.length]= {"value": key , "label": key}  
      })}))
      return (nature)
  }
    return (
      <div>
    
          <p>Caisse Dépenses : __________________________________________ close <AiFillCloseCircle onClick={()=>{navigate("/Register")}} style={{color:"red"}}/></p>
          <div style={{display:"flex" , flexDirection:"row" }}>
           <input id="Montant" type="number" placeholder='Montant'/>
          
          <Select options={SetOptions(useSelector(state=>state.DepOpReducer),Categories)} onChange={(e)=>(setSelectedCategories(e.value),Categories.map((el,i)=>(el.value===e.value?setSelectCategorie({"index":i,"value":e.value}):"")),
          setSelectElements({"index":0,"value":"-"})
          )}/>
          <Select options= {SetOptions(useSelector((state)=>state.DepOpReducer[SelectCategorie.index][SelectCategorie.value]),Elements)} onChange={(e)=>(setSelectedElements(e.value),Elements.map((el,i)=>(el.value===e.value?setSelectElements({"index":i,"value":e.value}):"")))}/>
          <Select options= {SetOptions(useSelector((state)=>state.DepOpReducer[SelectCategorie.index][SelectCategorie.value][SelectElements.index][SelectElements.value]),SElements)} onChange={(e)=>(setSelectedSElements(e.value))}/>
          <MdOutlineAddCircle style={{fontSize:25}}
           onClick={()=>(playAudio(document.getElementById("myAudio")),
           dispatch(addDep([document.getElementById('Montant').value,SelectedCategories,SelectedElements,SelectedSElements,document.getElementById('Observations').value]))              
           )}/>
          <FaShoppingCart style={{fontSize:25}}
          onClick={handleShow}/>
          </div>
          <input id="Observations" placeholder='Observations'></input>

          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"black" ,fontSize:20}}>Add a new spending Element for "AUTRES CHARGES" Category</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display:"flex"}}>
                <select defaultValue={"Element Type..."} id={`Element Name`}>
                <option hidden>Element Type...</option>
                <option>FOURNITURES</option>
                <option>PRODUITS DE NETTOYAGES</option>
                <option>ENTRETIEN ET REPARATION</option>
                </select>
                <input id={`Element value`} placeholder='Element Name'></input>
                                        
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>{setShow(false)}}>
              Cancel
            </Button>
            <Button variant="primary" 
              onClick={()=>(dispatch(addElement([document.getElementById(`Element Name`).value,document.getElementById(`Element value`).value])))}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
           
     </div>
  )
} 

export default CaisseDep