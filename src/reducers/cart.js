//Это редуктор
//начальное состояние
import unionBy from "lodash/unionBy";

const initialState = {
    items:[],
    totalPrice: 0,
    ids:[]
};
//создаем сам редуктор
export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            let res = [];
            res = [...state.items,
                action.payload]
            return {...state,
                items: unionBy(res.sort((a, b) => a.count < b.count ? 1 : -1 ), o => o.id).sort(),
                ids: [...state.ids,
                    {id: action.payload.id, count: action.payload.count}]
            };
        case "REMOVE_BOOK":

            let bookInCart = state.items.filter(o => o.id === action.payload)[0];
            let newCart = state.items.filter(o => o.id !== action.payload);
            if(!newCart){
                newCart = []
            }
            if(bookInCart.count >= 2){
                bookInCart.count = bookInCart.count - 1;
                newCart.unshift(bookInCart)
                return {
                    ...state,
                    items: newCart
                }}else{
                    return {...state,
                        items: newCart}

                }

        default:
            return state;
    }

}