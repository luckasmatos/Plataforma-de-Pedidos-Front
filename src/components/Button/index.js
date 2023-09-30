import React from "react"
import { Button as StyledButton } from './styles'

function Button({children, isOrdersPage, onClick}) {
    return (

        <StyledButton onClick={onClick} isOrdersPage={isOrdersPage}>{children}</StyledButton>      
    )
}

export default Button