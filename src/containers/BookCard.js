import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from "../actions/cart";
import BookCard from "../components/BookCard";



const mapStateToProps = ({cart}, {id}) => ({
    count: cart.items.filter(book => book.id === id).length &&  cart.items.filter(book => book.id === id)? cart.items.filter(book => book.id === id)[0].count : 0,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(BookCard);