import {Add} from '../actions/types'


let initState = 
  {


    }


    const HistoryReducer = (state=initState, action) => {
        switch (action.type) {
            case Add: return{
                ...state,initState: {...state.initState,id:action.payload[0],value:action.payload[1]}
            }
             default :return state;
        }
    
    };

export default HistoryReducer