import * as actionTypes from '../actions';

const initialState = {
    background: ""
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.BACKGROUND){   
        return action.payload;
    }
    return state;
}

export default reducer;