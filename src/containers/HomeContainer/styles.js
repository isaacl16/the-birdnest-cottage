import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";
import colors from "../../theme/colors";

export const StyledWrapper = styled.div`
    margin-top: 0px;
    padding: 200px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        margin: 0 20px;
    }
    @media (max-width: ${breakpoints.md}) {
        flex-direction: column;
        button {
            margin-bottom: 20px;
        }
    }
`

export const StyledImageContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 675px;
    max-height: 600px;
    margin: -100px auto 0 auto;
`


export const HeroImage = styled.img`
    width: 100%;
    height: auto;
`

export const StyledIcon = styled.div`
    width: 32px;
    height: 32px;
    background-image: url('/icons/lazada.png');
`
