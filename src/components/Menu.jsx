import React from 'react'
import { Button, Menu, List, Image, Popup } from 'semantic-ui-react'
import "./Menu.css"


const CartComponent = ({id, image, title, price, count, delBook, }) => {
        return (
            <List divided verticalAlign='middle' fixed={"top"}>
                <List.Item key={id}>
                    <div className={"cart-block-with-img"}>
                        <Image size={"small"} src={image}/>
                        <div className={"cart-block"}>
                            <List.Content className={"cart-title"}><p className={"cart-goods-text"}><b>Название:</b>&nbsp;{title}</p></List.Content>
                            <List.Content className={"cart-price"}><p className={"cart-goods-text"}><b>Цена:&nbsp;</b>{price}руб.</p></List.Content>
                            <List.Content className={"cart-count"}><p className={"cart-goods-text"}><b>Кол-во:&nbsp;</b>{count}</p></List.Content>
                            <List.Content floated='right'>
                                <Button onClick={delBook.bind(this, id)}>Удалить</Button>
                            </List.Content>
                            </div>
                        </div>
                </List.Item>
            </List>
        )
    }


const MenuComponent = ({totalPrice, totalBooksinCart, items}) =>  {
    if(!totalBooksinCart){
        return (
            <Menu size='large' className={'main-menu'}>
                <Menu.Item
                    name='Магазин книг'
                />
                <Menu.Menu position='right' fixed={"top"}>
                    <Popup trigger={<Menu.Item>
                        <Button primary>Корзина ({totalBooksinCart})</Button>
                    </Menu.Item>}
                           className={'empty-cart'}
                           content={'Пусто'}
                           on="click"/>
                    <Menu.Item>
                        <p>Итог: {totalPrice} рублей</p>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }else {
    return(
            <Menu size='large'>
                <Menu.Item
                    name='Магазин книг'
                />
                <Menu.Menu position='right'>
                    <Popup trigger={<Menu.Item>
                        <Button primary>Корзина ({totalBooksinCart})</Button>
                    </Menu.Item>}
                    content={items.map(unit => <CartComponent{...unit} key={unit.id}/>)}
                    on="click"
                           hideOnScroll={false}
                        />
                    <Menu.Item>
                        <p>Итог: {totalPrice} рублей</p>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
    )}}

export default MenuComponent