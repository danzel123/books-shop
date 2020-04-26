//Это редуктор
//начальное состояние
const initialState = {
    searchQuery: '',
    filterBy: 'all',
};
//создаем сам редуктор
export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_QUERY":
            return {...state,
                searchQuery: action.payload
            };
        case "SET_FILTER":
            return {...state,
                filterBy: action.payload
            };
        default:
            return state;
    }

}