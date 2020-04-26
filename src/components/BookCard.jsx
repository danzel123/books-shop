import React from 'react'
import { Card, Icon, Image, Button} from 'semantic-ui-react'
import "./BookCard.css"


const BookCard = (book) => {
    const {title, author, price, image, addBook, count} = book;
    return (
        <Card>
            <Image src={image} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='rub'/>
                    {price}
                </a>

            </Card.Content>
            <Button onClick={addBook.bind(this, {...book, count: count+1})}>Add to cart {count > 0 && `(${book.count})`}</Button>
        </Card>
    )
}

export default BookCard