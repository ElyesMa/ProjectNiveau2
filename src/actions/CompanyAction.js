import {EditCompany} from './types'
export const editCompany =(el) => {
    return {
        type : EditCompany,
        payload : el
    }
}