import styled from "styled-components/macro"

export const StyledIconButton = styled.div`
    width: 30px;
    height: 24px;
    background-image: url('assets/icons/${props => props.icon}.png')
`