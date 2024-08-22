import react from "react";
import { ACTION_TYPES } from "../../../../actionType";
export const INITIAL_STATE = {
    barangay: { data: [] },
    laoding: false,
    error: {},
    createDialog: false,
};

export const barangayFetchReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_START:
            return {
                ...state,
                loading: true,
                error: {},
                barangay: { data: [] },
            };
        case ACTION_TYPES.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {},
                barangay: action.payload,
            };
        case ACTION_TYPES.FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
                barangay: { data: [] },
            };
        case ACTION_TYPES.CREATE_DIALOG:
            return {
                ...state,
                createDialog: true,
            };
        case ACTION_TYPES.CREATE_DIALOG_CLOSE:
            return {
                ...state,
                createDialog: false,
            };
        default:
            return state;
    }
};
