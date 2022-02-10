import {
    INITIAL_DASHBOARD,
    SEARCH_DASHBOARD,
    SORT_DASHBOARD,
    SORT_DASHBOARD_STATUS,
} from "./types";

export const initialDashboard = (tests, sites) => {

    const arr = [];

    tests.forEach(item => {
        let itemArr = { ...item };
        itemArr.site = sites.find(obj => obj.id === item.siteId).url.replace('https://', '').replace('https://www.', '').replace('www.', '').replace('http://', '');
        arr.push(itemArr);
    })


    return {
        type: INITIAL_DASHBOARD,
        payload: arr
    }
}
export const searchDashboard = (data) => {

    return {
        type: SEARCH_DASHBOARD,
        payload: data
    }
}
export const sortDashboard = (sortKey, oldState) => {

    oldState.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));

    let state = [...oldState];

    return {
        type: SORT_DASHBOARD,
        payload: state
    }
}

export const sortDashboardStatus = (sortKey, oldState, flag) => {
    let xy;
    if (flag === true) {

        xy = (obj, key) => {
            let data = null;
            switch (obj[key]) {
                case "ONLINE":
                    data = 1
                    break;
                case "PAUSED":
                    data = 2
                    break;
                case "STOPPED":
                    data = 3
                    break;
                case "DRAFT":
                    data = 4
                    break;

                default:
                    data = 1
            }
            return data
        };

    } else {
        xy = (obj, key) => {
            let data = null;
            switch (obj[key]) {
                case "ONLINE":
                    data = 4
                    break;
                case "PAUSED":
                    data = 3
                    break;
                case "STOPPED":
                    data = 2
                    break;
                case "DRAFT":
                    data = 1
                    break;

                default:
                    data = 4
            }
            return data
        };
    }
    const compare = function (a, b) {
        let x = xy(a, sortKey);
        let y = xy(b, sortKey);

        return y - x;
    }
    oldState.sort(compare);
    let state = [...oldState];

    return {
        type: SORT_DASHBOARD_STATUS,
        payload: state
    }
}