export const setBooks = (books) => ({
    type: "SET_BOOK",
    payload: {books}
});

export const setPage = (page) => ({
    type: "SET_PAGE",
    payload: page
});
