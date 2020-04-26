import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PaginationExampleCompact from "../components/Pagination";
import * as booksActions from "../actions/booksACT";

const mapStateToProps = ({books}) => ({
    curPage: books.page

});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(PaginationExampleCompact);