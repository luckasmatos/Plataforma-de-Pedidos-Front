import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 450px) {
        width: 100%;
        margin-top: 0px;
  }
`

// export const Main = styled.div`
//     width: 100%;
//     min-height: 360px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
// `