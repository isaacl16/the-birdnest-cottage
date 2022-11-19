import images from "../../assets/images"
import Navbar from "../Navbar"
import { StyledLogo, StyledWrapper } from "./styles"

const Header = (props) => {
    return (
        <StyledWrapper>
            <StyledLogo src={images.logo} />
            <Navbar homeRef={props.homeRef} productsRef={props.productsRef} aboutRef={props.aboutRef} isMobile={props.isMobile} />
        </StyledWrapper>
    )
}

export default Header