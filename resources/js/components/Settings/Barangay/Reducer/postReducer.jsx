import react, { act } from "react";

export const INITIAL_STATE = {
    barangay: null,
    saving: false,
    error: {},
    response: {},
};

export const postReducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                [action.field]: action.value,
            };
        case "SAVE_START":
            return {
                ...state,
                saving: true,
            };
        case "SAVE_SUCCESS":
            return {
                ...state,
                saving: false,
                response: action.payload,
            };
        case "SAVE_ERROR":
            return {
                ...state,
                saving: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
