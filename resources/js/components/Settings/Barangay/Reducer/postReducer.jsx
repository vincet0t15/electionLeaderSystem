import react, { act } from "react";
import { ACTION_TYPES } from "../../../../actionType";
export const INITIAL_STATE = {
    form: { barangay: null },
    saving: false,
    error: {},
    response: {},
    alertData: {
        isShow: false,
        message: "",
        status: "",
    },
};

export const postReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_FIELD:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.name]: action.payload.value,
                },
            };
        case ACTION_TYPES.SAVE_START:
            return {
                ...state,
                saving: true,
            };
        case ACTION_TYPES.SAVE_SUCCESS:
            return {
                ...state,
                saving: false,
                response: action.payload,
                form: { barangay: "" },
                alertData: {
                    isShow: true,
                    message: action.payload.message,
                    status: action.payload.status,
                },
            };
        case ACTION_TYPES.FETCH_ERROR:
            return {
                ...state,
                saving: false,
                error: action.payload,
            };
        case ACTION_TYPES.CLEAR_ALERT:
            return {
                ...state,
                alertData: {
                    isShow: false,
                    message: "",
                    status: "",
                },
            };
        default:
            return state;
    }
};
