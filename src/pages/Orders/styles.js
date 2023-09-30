import styled from 'styled-components'

export const OrderCard = styled.li`
    width: 350px;
    min-height: 58px;
    height: auto;
    border: none;
    outline: none;
    background: #FFFFFF40;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`

export const OrderData = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;
`

export const TrashButton = styled.button`
    background-color: transparent;
    border: none;
`

export const Trash = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 20px;
    cursor: pointer;
    filter: invert(80%);
`