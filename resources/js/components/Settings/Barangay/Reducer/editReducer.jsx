import { EDIT_BARANGAY_ACTION_TYPES } from "../editBarangayActionType";

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
        case EDIT_BARANGAY_ACTION_TYPES.SET_FIELD:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.name]: action.payload.value,
                },
            };
        case EDIT_BARANGAY_ACTION_TYPES.EDIT_DIALOG_OPEN:
            return {
                ...state,
                editDialog: true,
            };
        case EDIT_BARANGAY_ACTION_TYPES.EDIT_DIALOG_CLOSE:
            return {
                ...state,
                editDialog: false,
            };
        case EDIT_BARANGAY_ACTION_TYPES.LOAD_DATA_TO_EDIT:
            return {
                ...state,
                dataToEdit: action.payload,
                form: {
                    ...state.form,
                    barangay: action.payload.barangay || "", // Populate form with data to edit
                },
            };
        case EDIT_BARANGAY_ACTION_TYPES.SAVE_START:
            return {
                ...state,
                saving: true,
                error: {},
            };
        case EDIT_BARANGAY_ACTION_TYPES.SAVE_SUCCESS:
            return {
                ...state,
                saving: false,
                alertData: {
                    isShow: true,
                    message: "Barangay successfully saved!",
                    status: "success",
                },
                dataToEdit: {},
                form: {
                    barangay: "",
                },
            };
        case EDIT_BARANGAY_ACTION_TYPES.SAVE_ERROR:
            return {
                ...state,
                saving: false,
                error: action.payload,
                alertData: {
                    isShow: true,
                    message: "Error saving Barangay.",
                    status: "error",
                },
            };
        case EDIT_BARANGAY_ACTION_TYPES.CLEAR_ALERT:
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
