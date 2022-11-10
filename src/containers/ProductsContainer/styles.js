import styled from "styled-components/macro";

export const StyledWrapper = styled.div`
    min-height: 80vh;
    padding: 10%;
`

export const StyledHeader = styled.div`
    width: 80%;
    max-width: 1100px;
    text-align: start;
    margin: 30px auto;
`


export const StyledContainer = styled.div`
    max-width: 1100px;
    min-width: 1100px;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: start;
    margin: 30px auto;
`
export const StyledChild = styled.div`
    margin-top: 70px;
    width: 33%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledImage = styled.div`
    width: 326px;
    height: 276px;
    background-image: url('/assets/products/product.png')
`
