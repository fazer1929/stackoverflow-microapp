export const initialState = {
    items:[],
};


const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_ITEMS':
            return {
                ...state,
                items: [...state.items, ...action.item]
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );            
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index,1)
            }
            else{
                console.warn("Cant Remove SHIT!")
            }

            return {...state,
                basket:newBasket}

        default:
            return  state
    }
};

export default reducer;