import React from "react"
import { Container as ContainerItens } from './styles'

function Container({children}) {
    return (
        <ContainerItens>{children}</ContainerItens>      
    )
}

export default Container