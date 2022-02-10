import {
    VALUE_SEARCH,
} from "./types";

export const changeValue = (data) => {

    return {
        type: VALUE_SEARCH,
        payload: data
    }
}
