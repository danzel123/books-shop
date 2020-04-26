//Это редуктор
//начальное состояние
const initialState = {
    isReady: false,
    items: null,
    page: 1};
//создаем сам редуктор
export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_BOOK":
            return {...state,
                items: action.payload,
                isReady: true
            };
        case "SET_IS_READY":
            return {
                ...state,
                isReady: action.payload
            }
        case "SET_PAGE":
            return {...state,
            page: action.payload
            };
        default:
            return state;
    }

}