import * as actionTypes from '../actions';

const initialState = {
    nombre: "",
    apellido: "",
    edad: null
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.SUBMIT){   
        return action.payload;
    }
    return state;
}

export default reducer;