import { useEffect, useState } from "react";
import IconButton from "../../components/IconButton";
import { useResize, useScroll } from "../../hooks";
import { StyledBackground, StyledContainer, StyledNav, StyledNavItem } from './styles';

const Navbar = (props) => {
    const [activeLink, setActiveLink] = useState('home')
    const [isMobile, setIsMobile] = useState(false)
    const [mobileNavMenu, setMobileNavMenu] = useState(false)

    const scrollToSection = (elementRef) => {
        // console.log(elementRef.current.offsetTop)
        window.scrollTo({
            top: elementRef.current.offsetTop - 100,
            behavior: 'smooth'
        })
        closeOnClick()
    }
    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= props.productsRef.current.offsetTop - 100)
            setActiveLink('products')
        else if (position >= props.aboutRef.current.offsetTop - 100)
            setActiveLink('about')
        else
            setActiveLink('home')
        // console.log(activeLink + "  " + position)
    };

    const handleResize = () => {
        const width = window.innerWidth
        if (width <= 480) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    const menuOnClick = () => {
        setMobileNavMenu(true)
        document.body.style.overflow = 'hidden'
    }

    const closeOnClick = () => {
        setMobileNavMenu(false)
        document.body.style.overflow = 'unset'
    }
    useScroll(handleScroll)
    useResize(handleResize)
    useEffect(() => {
        handleResize()
    }, [])

    return (
        <>
            {
                mobileNavMenu ?
                    <StyledBackground onClick={closeOnClick} />
                    : <></>
            }
            {
                isMobile ?
                    <StyledContainer>
                        <IconButton icon="menu" onClick={menuOnClick} />
                    </StyledContainer>
                    :
                    <></>
            }
            <StyledNav active={mobileNavMenu}>
                {isMobile ?
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
            </StyledNav>


        </>
    )
}

export default Navbar