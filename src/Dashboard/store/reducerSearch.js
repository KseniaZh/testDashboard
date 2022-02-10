import {
    VALUE_SEARCH,
} from "./types";

const initialState = {
    
    'value':''
};


const stateSearch = (state = initialState, action) => {

    switch (action.type) {
        case VALUE_SEARCH:
            return {
                ...state,
                value: action.payload
            }

        default:
            return state;
    }
}
export default stateSearch


