import Button from "../Button"
import Icon from "../Icon"
import { StyledDescription, StyledImage, StyledTitle, StyledWrapper } from "./styles"

const Card = (props) => {
    return (
        <StyledWrapper>
            <StyledImage src={props.image} />
            <StyledDescription>
                <StyledTitle>{props.title}</StyledTitle>
                <p>500G - $1000</p>
                <p>100G - $210</p>
            </StyledDescription>
            <Button width="100%">
                <Icon icon="cart" />
            </Button>
        </StyledWrapper>

    )
}

export default Card