import {ChangePassword , EditUser , AddUser , ConUser} from './types'
export const changePassword =(NewPassword) => {
    return {
        type : ChangePassword,
        payload : NewPassword
    }
}

export const editUser =(el) => {
    return {
        type : EditUser,
        payload : el
    }
}

export const addUser =(el) => {
    return {
        type : AddUser,
        payload : el
    }
}

export const conUser =(el) => {
    return {
        type : ConUser,
        payload : el
    }
}


