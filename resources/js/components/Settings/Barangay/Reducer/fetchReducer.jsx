import react from "react";
import { ACTION_TYPES } from "../../../../actionType";
export const INITIAL_STATE = {
    barangay: { data: [] },
    laoding: false,
    error: {},
};

export const barangayFetchReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_START:
            return {
                loading: true,
                error: {},
                barangay: { data: [] },
            };
        case ACTION_TYPES.FETCH_SUCCESS:
            return {
                loading: false,
                error: {},
                barangay: action.payload,
            };
        case ACTION_TYPES.FETCH_ERROR:
            return {
                error: action.payload,
                loading: false,
                barangay: { data: [] },
            };
        default:
            return state;
    }
};
