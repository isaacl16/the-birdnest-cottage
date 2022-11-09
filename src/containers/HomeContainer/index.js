import StyledButton from "../../components/Button"
import { HeroImage, StyledButtonWrapper, StyledIcon, StyledWrapper } from "./styles"

const HomeContainer = (props) => {
    return (
        <StyledWrapper ref={props.homeRef}>
            <HeroImage />
            <StyledButtonWrapper>
                <StyledButton>
                    <p>Visit our shop</p>
                    <StyledIcon />
                </StyledButton>
                <StyledButton>
                    <p>Find out more</p>
                </StyledButton>
            </StyledButtonWrapper>

        </StyledWrapper>
    )
}

export default HomeContainer