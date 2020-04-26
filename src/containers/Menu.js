import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from "../actions/cart";
import Menu from "../components/Menu";
import unionBy from "lodash/unionBy"

const mapStateToProps = ({cart}) => ({
    totalPrice: cart.items ? cart.items.reduce((total, book) => total + (book.count * book.price), 0) : 0,
    totalBooksinCart: cart.items ? cart.items.reduce((total, book) => total + book.count, 0) : 0,
    items: unionBy(cart.items.sort((a, b) => a.count < b.count ? 1 : -1 ), o => o.id).sort((a,b) =>a.id < b.id ? 1: -1),

});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Menu);