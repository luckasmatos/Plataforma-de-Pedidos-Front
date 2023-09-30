import React from "react"
import { Image as LogoImage } from './styles'

function Image({children, isOrdersPage, ...props}) { 
    return (

        <LogoImage isOrdersPage={isOrdersPage} {...props}>{children}</LogoImage>      
    )
}

export default Image