const INITIAL_STATE = {
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: 10,
};

export const paginationReducer = (state, action) => {
    switch (action.type) {
        case PAGINATION_ACTION_TYPES.SET_PAGE:
            return { ...state, currentPage: action.payload };
        case PAGINATION_ACTION_TYPES.SET_TOTAL_ITEMS:
            return { ...state, totalItems: action.payload };
        case PAGINATION_ACTION_TYPES.SET_ITEMS_PER_PAGE:
            return { ...state, itemsPerPage: action.payload };
        default:
            return state;
    }
};
