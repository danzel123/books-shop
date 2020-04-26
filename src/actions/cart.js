export const addBook = book => ({
        type: 'ADD_BOOK',
        payload: book,
    }
)

export const delBook = id => ({
        type: 'REMOVE_BOOK',
        payload: id,
    }
)

