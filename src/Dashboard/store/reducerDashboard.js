import {
    INITIAL_DASHBOARD,
    SEARCH_DASHBOARD,
    SORT_DASHBOARD,
    SORT_DASHBOARD_STATUS,
} from "./types";

const initialState = {
    "sites": [
        {
            "id": 1,
            "url": "https://market.company.com"
        },
        {
            "id": 2,
            "url": "https://www.delivery.company.com"
        },
        {
            "id": 3,
            "url": "http://games.company.com"
        }
    ],
    "tests": [
        {
            "id": 1,
            "name": "Prototype of the new map",
            "type": "Classic",
            "status": "PAUSED",
            "siteId": 2
        },
        {
            "id": 2,
            "name": "Dark theme test",
            "type": "MVT",
            "status": "DRAFT",
            "siteId": 3
        },
        {
            "id": 3,
            "name": "New Year's Sale",
            "type": "MVT",
            "status": "STOPPED",
            "siteId": 1
        },
        {
            "id": 4,
            "name": "Order basket redesing",
            "type": "Classic",
            "status": "ONLINE",
            "siteId": 1
        },
        {
            "id": 5,
            "name": "Spring promotion",
            "type": "Server-side",
            "status": "DRAFT",
            "siteId": 2
        },
        {
            "id": 6,
            "name": "Prototype of a new header",
            "type": "Server-side",
            "status": "ONLINE",
            "siteId": 3
        },
        {
            "id": 7,
            "name": "New Year's Sale Copy 1",
            "type": "MVT",
            "status": "DRAFT",
            "siteId": 1
        }
    ],
    "stateTests":[]
};


const stateDashboard = (state = initialState, action) => {

    switch (action.type) {
        case INITIAL_DASHBOARD:
            return {
                ...state,
                stateTests: action.payload
            }
        case SEARCH_DASHBOARD:
            return {
                ...state,
                stateTests: action.payload
            }
        case SORT_DASHBOARD:
            return {
                ...state,
                stateTests: action.payload
            }
        case SORT_DASHBOARD_STATUS:
            return {
                ...state,
                stateTests: action.payload
            }
        default:
            return state;
    }
}
export default stateDashboard


