import { ACTION_TYPES } from "../../../../actionType";

export const INITIAL_STATE_EDIT = {
    editDialog: false,
};

export const barangayEditReducer = (state, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};
