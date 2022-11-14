import Button from "../Button"
import Icon from "../Icon"
import { StyledDescription, StyledImage, StyledTitle, StyledWrapper } from "./styles"

const Card = (props) => {
    return (
        <StyledWrapper>
            <StyledImage src={props.image} />
            <StyledDescription>
                <StyledTitle>{props.title}</StyledTitle>
                <p>{props.price1}</p>
                <p>{props.price2}</p>
            </StyledDescription>
            <Button width="100%">
                <Icon icon="cart" />
            </Button>
        </StyledWrapper>

    )
}

export default Card