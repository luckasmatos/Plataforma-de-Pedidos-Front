import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { OrderCard, OrderData, TrashButton, Trash } from './styles'
import Body from '../../components/Body'
import Container from '../../components/Container'
import Image from '../../components/Image'
import Main from '../../components/Main'
import Title from '../../components/Title'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'
import OrderLogo from '../../assets/order-logo.png'
import TrashImage from '../../assets/trash-image.png'

function Orders() {

    const [order, setOrder] = useState([])
    const history = useHistory()
    
    useEffect(() => {
        async function ordersList() {
            const {data: newOrder} = await axios.get("http://localhost:3001/order")
            setOrder(newOrder)
        }
        ordersList()
    }, [])

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3001/order/${orderId}`)
        const atualizedOrders = order.filter(order => order.id !== orderId)
        setOrder(atualizedOrders)
    }

    function pageNavigate() {
        history.push('/')
    }

    return (
        <Body>
            <Container>
                <Image isOrdersPage={true} alt='Order logo image' src={OrderLogo} />
                <Main>
                    <Title>Pedidos</Title>

                    <ul>
                        {order.map((order) => (
                            <OrderCard key={order.id}>
                                <OrderData>
                                    <p>{order.item}</p>
                                    <p><strong>{order.name}</strong></p>
                                </OrderData>

                                <TrashButton onClick={() => deleteOrder(order.id)}><Trash src={TrashImage} /></TrashButton>
                            </OrderCard>))}
                    </ul>

                    <Button isOrdersPage={true} onClick={pageNavigate}>Voltar</Button>

                </Main>
            </Container>
        </Body>
    )

}

export default Orders
