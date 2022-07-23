import {Add} from './types'
export const add =(el) => {
    return {
        type : Add,
        payload : el
    }
}