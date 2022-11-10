import styled from "styled-components"

export const StyledIcon = styled.div`
    width: 32px;
    height: 32px;
    background-image: url('/icons/${props => props.icon}.png');
    background-size: contain;
    background-repeat: no-repeat;
`