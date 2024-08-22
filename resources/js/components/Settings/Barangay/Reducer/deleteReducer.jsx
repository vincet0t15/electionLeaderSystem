import { DELETE_BARANGAY_ACTION_TYPES } from "../deleteBarangayActionType";
export const INITIAL_STATE_DELETE = {
    barangay: "",
    deleteDialog: false,
    deleting: false,
    form: {
        id: "",
        barangay: "",
    },
    alertData: {
        isShow: false,
        message: "",
        status: "",
    },
};

export const barangayDeleteReducer = (state, action) => {
    switch (action.type) {
        case DELETE_BARANGAY_ACTION_TYPES.DELETE_START:
            return {
                ...state,
                deleting: true,
            };
        case DELETE_BARANGAY_ACTION_TYPES.DELETE_DIALOG_OPEN:
            return {
                ...state,
                deleteDialog: true,
            };
        case DELETE_BARANGAY_ACTION_TYPES.DELETE_DIALOG_CLOSE:
            return {
                ...state,
                deleteDialog: false,
            };
        case DELETE_BARANGAY_ACTION_TYPES.DATA_TO_DELETE:
            return {
                ...state,
                form: {
                    id: action.payload.id,
                    barangay: action.payload.barangay,
                },
                editDialog: true,
            };
        case DELETE_BARANGAY_ACTION_TYPES.DELETE_SUCCESS:
            return {
                ...state,
                deleting: false,
                alertData: {
                    isShow: true,
                    message: action.payload.message,
                    status: action.payload.status,
                },
            };
        case DELETE_BARANGAY_ACTION_TYPES.CLEAR_ALERT:
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
