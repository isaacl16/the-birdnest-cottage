import { Link } from "react-scroll"
import { StyledNav, StyledNavItem } from './styles'

const Navbar = () => {
    return (
        <StyledNav>
            <StyledNavItem>
                <Link activeClass="active" smooth spy to="home">
                    home
                </Link>
            </StyledNavItem>
            <StyledNavItem>
                <Link activeClass="active" smooth spy to="about">
                    about
                </Link>
            </StyledNavItem>
            <StyledNavItem>
                <Link activeClass="active" smooth spy to="products">
                    products
                </Link>
            </StyledNavItem>

        </StyledNav>
    )
}

export default Navbar