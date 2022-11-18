import { useEffect, useState } from "react";
import IconButton from "../../components/IconButton";
import { useResize, useScroll } from "../../hooks";
import { StyledBackground, StyledContainer, StyledNav, StyledNavItem } from './styles';

const Navbar = (props) => {
    const [activeLink, setActiveLink] = useState('home')
    const [mobileNavMenu, setMobileNavMenu] = useState(false)

    const scrollToSection = (elementRef) => {
        // console.log(elementRef.current.offsetTop)
        window.scrollTo({
            top: elementRef.current.offsetTop - 70,
            behavior: 'smooth'
        })
        closeOnClick()
    }
    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= props.productsRef.current.offsetTop - 100) {
            setActiveLink('products')
        }
        else if (position >= props.aboutRef.current.offsetTop - 100)
            setActiveLink('about')
        else
            setActiveLink('home')
        // console.log(activeLink + "  " + position)
    };


    const menuOnClick = () => {
        setMobileNavMenu(true)
        document.body.style.overflow = 'hidden'
    }

    const closeOnClick = () => {
        setMobileNavMenu(false)
        document.body.style.overflow = 'unset'
    }
    useScroll(handleScroll)

    return (
        <>
            {
                mobileNavMenu ?
                    <StyledBackground onClick={closeOnClick} />
                    : <></>
            }
            {
                props.isMobile ?
                    <StyledContainer>
                        <IconButton icon="menu" onClick={menuOnClick} />
                    </StyledContainer>
                    :
                    <></>
            }
            <StyledNav active={mobileNavMenu}>
                {props.isMobile ?
                    <StyledContainer>
                        <IconButton icon="close" onClick={closeOnClick} />
                    </StyledContainer>
                    :
                    <></>
                }
                <StyledNavItem onClick={() => scrollToSection(props.homeRef)} isActive={activeLink === 'home' ? true : false}>
                    HOME
                </StyledNavItem>
                <StyledNavItem onClick={() => scrollToSection(props.aboutRef)} isActive={activeLink === 'about' ? true : false}>
                    ABOUT
                </StyledNavItem>
                <StyledNavItem onClick={() => scrollToSection(props.productsRef)} isActive={activeLink === 'products' ? true : false}>
                    PRODUCTS
                </StyledNavItem>
                <StyledNavItem>
                    SHOP
                </StyledNavItem>
            </StyledNav>


        </>
    )
}

export default Navbar