import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";

export const StyledWrapper = styled.div`
    min-height: 80vh;
    padding: 10%;
`

export const StyledHeader = styled.div`
    width: 80%;
    max-width: 1100px;
    text-align: start;
    margin: 30px auto;
    padding-left: 40px;
    @media (max-width: ${breakpoints.sm}){
        padding: 0px;
        width: 100%;
    }
`

export const StyledDescription = styled.div`
    min-height: 150px;
`


export const StyledContainer = styled.div`
    width: 80%;
    max-width:1100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
    margin: 0px auto;
    @media (max-width: ${breakpoints.sm}){
        width: 100%;
    }
`
export const StyledColumn = styled.div`
    margin-top: 70px;
    width: 28%;
    padding: 0 20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${breakpoints.md}){
        width: 40%;
    }
    @media (max-width: ${breakpoints.sm}){
        margin: 40px auto;
        padding: 0;
        width: 100%;
    }
`

export const StyledImage = styled.div`
    width: 100%;
    padding-bottom: 66%;
    background-image: url('/assets/products/product.png')
`
