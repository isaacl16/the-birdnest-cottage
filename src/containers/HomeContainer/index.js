import Button from "../../components/Button"
import { HeroImage, StyledButtonWrapper, StyledIcon, StyledWrapper } from "./styles"

const HomeContainer = (props) => {
    return (
        <StyledWrapper ref={props.homeRef}>
            <HeroImage />
            <StyledButtonWrapper>
                <Button>
                    <p>Visit our shop</p>
                    <StyledIcon />
                </Button>
                <Button>
                    <p>Find out more</p>
                </Button>
            </StyledButtonWrapper>

        </StyledWrapper>
    )
}

export default HomeContainer