import *  as actionTypes from "../type/studType"

const initialState = {
    stud: []
}

const studReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_Stud:
            return {
                ...state,
                stud: action.payload
            }
        default: return state;
    }
}
export default studReducer;