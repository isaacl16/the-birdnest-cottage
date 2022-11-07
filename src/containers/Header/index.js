import Navbar from "../Navbar"
import { StyledLogo, StyledWrapper } from "./styles"
const Header = () => {
    return (
        <StyledWrapper>
            <StyledLogo />
            <Navbar />
        </StyledWrapper>
    )
}

export default Header