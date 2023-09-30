import styled from 'styled-components'

export const Container = styled.div`
    width: 450px;
    min-height: 800px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    @media (max-width: 450px) {
        width: 100%;
        height: 100vh;
        margin-top: 0px;
  }
`

