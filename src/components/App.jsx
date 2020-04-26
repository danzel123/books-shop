import React, {Component} from 'react';
import Menu from "../containers/Menu";
import Filter from "../containers/Filter";
import BookCard from "../containers/BookCard";
import PaginationExampleCompact from "../containers/Pagination";
import {Card} from "semantic-ui-react";
import {Container} from "semantic-ui-react";
import './App.css';
import axios from "axios";

class App extends Component {
    componentWillMount() {
        const {setBooks} = this.props
        axios.get('./books.json').then(({data}) => {
            setBooks(data);
        })
    }

    render() {
        const {books, isReady, setFilter} = this.props;

        return(
            <Container>
                <header className={'main-header'}>
                    <Menu/>
                    <Filter setFilter={setFilter} className={"header-filter"}/>
                </header>
                <Card.Group itemsPerRow={4}>
                {

                    !isReady ? 'Loading...':books.map((book, i) => (
                        <BookCard key={i} {...book} />
                    ))
                }
                </Card.Group>
                <PaginationExampleCompact/>
                </Container>

                )
    }
}


export default App