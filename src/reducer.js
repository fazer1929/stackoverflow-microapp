export const initialState = {
    items:[], 
    page:1,
};


const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_ITEMS':
            return {
                ...state,
                items: [...state.items, ...action.item]
            };

        case 'CHNAGE_PAGE':
            return{
                ...state,
                page:action.page
            }
        default:
            return  state
    }
};

export default reducer;