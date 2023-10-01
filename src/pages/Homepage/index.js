import React, { useState, useRef } from 'react'
import axios from 'axios'
import { InputBox, InputLabel, Input } from './styles'
import Body from '../../components/Body'
import Container from '../../components/Container'
import Image from '../../components/Image'
import Main from '../../components/Main'
import Title from '../../components/Title'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'
import HamburgerLogo from '../../assets/hamburger-logo.png'

function Homepage() {

    const [order, setOrder] = useState([])
    const inputItem = useRef()
    const inputName = useRef()
    const history = useHistory()
    const [isEmptyInputItem, setIsEmptyInputItem] = useState(false)
  const [isEmptyInputName, setIsEmptyInputName] = useState(false)


    async function addNewOrder() {

        if (inputItem.current.value === "" || inputName.current.value === "") {
            if (inputItem.current.value === "") { setIsEmptyInputItem(true) }
            else { setIsEmptyInputItem(false) }

            if (inputName.current.value === "") { setIsEmptyInputName(true) }
            else { setIsEmptyInputName(false) }
        }

        else {
        const {data: newOrder} = await axios.post("http://localhost:3001/order", {item:inputItem.current.value, name:inputName.current.value})
        setOrder([...order, newOrder])
        history.push('/order') 
        }
    }

    return (
        <Body>
            <Container>
                <Image alt='Hamburger logo image' src={HamburgerLogo} />
                <Main>
                    <Title>Faça seu pedido!</Title>
                    <InputBox>
                        <InputLabel>Pedido</InputLabel>
                        <Input isEmpty={isEmptyInputItem} ref={inputItem} placeholder="Ex: X-salada" />
                        <InputLabel>Nome do cliente</InputLabel>
                        <Input isEmpty={isEmptyInputName} ref={inputName} placeholder="Digite seu nome" />
                    </InputBox>
                    <Button onClick={addNewOrder}>Cadastrar pedido</Button>

                </Main>
            </Container>
        </Body>
    )

}

export default Homepage
