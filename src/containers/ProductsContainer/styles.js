import styled from "styled-components/macro";

export const StyledWrapper = styled.div`
    min-height: 80vh;
    padding: 10%;
`

export const StyledContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: start;
    margin: auto;
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
