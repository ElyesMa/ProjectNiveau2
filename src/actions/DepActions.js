import {AddElement} from './types'
export const addElement =(el) => {
    return {
        type : AddElement,
        payload : el
    }
}