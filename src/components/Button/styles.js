import styled from 'styled-components'

export const Button = styled.button`
    width: 350px;
    height: 74px;
    background-color: ${props => props.isOrdersPage ? 'rgba(255, 255, 255, 0.14)' : 'red'};
    border: none;
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &:hover {
        border: 3px solid #FFF;
    }

    &:active {
        opacity: 0.7;
    }`