import { ACTION_TYPES } from "../../../../actionType";

export const INITIAL_STATE_EDIT = {
    editDialog: false,
    saving: false,
    error: {},
    dataToEdit: {},
    form: {
        barangay: "",
    },
    alertData: {
        isShow: false,
        message: "",
        status: "",
    },
};

export const barangayEditReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_FIELD:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.name]: action.payload.value,
                },
            };
        case ACTION_TYPES.EDIT_DIALOG:
            return {
                ...state,
                editDialog: true,
            };
        case ACTION_TYPES.EDIT_DIALOG_CLOSE:
            return {
                ...state,
                editDialog: false,
            };
        case "DATA_TO_EDIT":
            return {
                ...state,
                dataToEdit: action.payload,
            };
        default:
            return state;
    }
};
