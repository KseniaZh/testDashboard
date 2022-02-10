import { combineReducers } from "redux";

import stateDashboard from '../Dashboard/store/reducerDashboard';
import stateSearch from '../Dashboard/store/reducerSearch';


const rootReducer = combineReducers({
    stateDashboard,
    stateSearch,
})

export default rootReducer