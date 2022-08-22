import * as actionTypes from "../type/studType"

export const getStud = () => {

    const action = {
        type: actionTypes.GET_STUD
    }
    return action;
}

export const setStud = (payload) => {
    const action = {
        type: actionTypes.SET_Stud,
        stud: payload

    }
    return action;
}