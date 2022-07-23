import {AddCash,UpdateCurrencies,AddChq,EditChq,RemoveChq,AddDep,EditDep,RemoveDep,AddInvoice} from './types'
export const addCash =(el) => {
    return {
        type : AddCash,
        payload : el
    }
}
export const updateCurrencies =(rate) => {
    return {
        type : UpdateCurrencies,
        payload : rate
    }
}

export const addChq =(el) => {
    return {
        type : AddChq,
        payload : el    
    }
}

export const editChq =(el) => {
    return {
        type : EditChq,
        payload : el
    }
}

export const removeChq =(id) => {
    return {
        type : RemoveChq,
        payload : id
    }
}

export const addDep =(el) => {
    return {
        type : AddDep,
        payload : el
    }
}

export const editDep =(el) => {
    return {
        type : EditDep,
        payload : el
    }
}


export const removeDep =(el) => {
    return {
        type : RemoveDep,
        payload : el
    }
}

export const addInvoice =(el) => {
    return {
        type : AddInvoice,
        payload : el
    }
}

