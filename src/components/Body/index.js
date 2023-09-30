import React from "react"
import { Body as BodyItens } from './styles'

function Body({children}) {
    return (

        <BodyItens>{children}</BodyItens>      
    )
}

export default Body