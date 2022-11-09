import styled from "styled-components"

export const StyledIcon = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    background-image: url('/icons/${props => props.icon}.png')
`