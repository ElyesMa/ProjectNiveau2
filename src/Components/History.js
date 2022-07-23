import Header from './Header';
import { useSelector } from 'react-redux'

const History = () => {
  let Details=useSelector(state=>state.HistoryReducer.initState)
  return (
    <div>
       <Header/>
        {console.log(Details)}

        {Details.map((el,i)=>(
        <div key={i} style={{display:"flex" , justifyContent:"space-evently"}}>
             {console.log(el)}
            <p>Journée du :</p>
        </div>
        ))}
      

   


    </div>
  )
}

export default History