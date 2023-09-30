import styled from 'styled-components'

export const InputBox = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.label`
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.4px;
    text-align: left;
    margin-left: 20px;
    margin-bottom: 5px;
    color: #FFF;
`

export const Input = styled.input`
    width: 350px;
    height: 58px;
    border: ${({ isEmpty }) => (isEmpty ? '2px solid red' : 'none')};
    outline: none;
    background: #FFFFFF40;
    border-radius: 14px;
    padding-left: 20px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 25px;
`