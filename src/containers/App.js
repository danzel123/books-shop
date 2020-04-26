import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as booksActions from "../actions/booksACT";
import App from "../components/App"
import orderBy from "lodash/orderBy";

const sortBy = (books, type, query) => {
    books = books.books;
    books = books.filter(o => o.title.toLowerCase().includes(query.toLowerCase())
        || o.author.toLowerCase().includes(query.toLowerCase()))
    switch (type) {
        case 'all':
            return books;
        case 'costly':
            return orderBy(books, 'price', 'desc');
        case 'cheap':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books
    }
}


const mapStateToProps = ({books, filter}) => ({
    books: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery).slice(books.page === 1 ? 0 : (books.page - 1) * 8, books.page * 8),
    isReady: books.isReady,

});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)