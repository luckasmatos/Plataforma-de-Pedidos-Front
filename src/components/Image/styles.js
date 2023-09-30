import styled from 'styled-components'

export const Image = styled.img`
    width: ${props => props.isOrdersPage ? '250px' : '300px'};
    margin: 40px 0;
    pointer-events: none;
`