import Navbar from "../Navbar"
import { StyledLogo, StyledWrapper } from "./styles"
const Header = (props) => {
    return (
        <StyledWrapper>
            <StyledLogo />
            <Navbar homeRef={props.homeRef} productsRef={props.productsRef} aboutRef={props.aboutRef} />
        </StyledWrapper>
    )
}

export default Header