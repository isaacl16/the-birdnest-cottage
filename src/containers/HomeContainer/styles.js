import styled from "styled-components/macro";
import colors from "../../theme/colors";

export const StyledWrapper = styled.div`
    margin-top: -100px;
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
`

export const HeroImage = styled.div`
    margin-top: -100px;
    width: 675px;
    height: 600px;
    background-image: url('/assets/hero.png')
`

export const StyledIcon = styled.div`
    width: 32px;
    height: 32px;
    background-image: url('/icons/lazada.png');
`
