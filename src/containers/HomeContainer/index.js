import images from "../../assets/images"
import Button from "../../components/Button"
import Icon from "../../components/Icon"
import { onClickRedirect, scrollToSection } from "../../utils"
import { HeroImage, StyledButtonWrapper, StyledImageContainer, StyledWrapper } from "./styles"
const HomeContainer = (props) => {
    return (
        <StyledWrapper ref={props.homeRef}>
            <StyledImageContainer>
                <HeroImage src={images.hero} />
            </StyledImageContainer>
            <StyledButtonWrapper>
                <Button onClick={() => onClickRedirect("https://www.lazada.sg")} >
                    <p>Visit our shop</p>
                    <Icon icon="lazada" />
                </Button>
                <Button onClick={() => scrollToSection(props.aboutRef)} elementRef={props.aboutRef} outline={true}>
                    <p>Find out more</p>
                </Button>
            </StyledButtonWrapper>

        </StyledWrapper>
    )
}

export default HomeContainer