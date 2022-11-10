import styled from "styled-components/macro";
import colors from "../../theme/colors";

export const StyledWrapper = styled.div`
    background-color: ${colors.lightGreen};
    padding: 10%;
    text-align: start;
`

export const StyledHeader = styled.div`
    width: 80%;
    max-width: 1100px;
    margin: 30px auto;
`

export const StyledContainer = styled.div`
    width: 80%;
    max-width: 1100px;
    margin: 30px auto;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column-reverse
    }
    @media (max-width: 480px) {
        width: 100%;
    }
`
export const StyledChild = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px){
        width: 100%;
        margin-top: 20px;
    }
`

export const StyledIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

export const StyledImage = styled.div`
    top: -50%;
    width: 401px;
    height: 319px;
    background-image: url('/assets/about.png');
    background-size: cover;
`

export const StyledIcon = styled.div`
    color: ${colors.white};
    margin: 20px 20px 0 0;
    width: 32px;
    height: 32px;
    background-image: url('/icons/${props => props.icon}.png')
`