import { useEffect, useState } from "react"
import { Link } from 'react-scroll'
import { StyledNav, StyledNavItem } from './styles'

const Navbar = (props) => {
    const [activeLink, setActiveLink] = useState('home')

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
    const scrollToSection = (elementRef) => {
        // console.log(elementRef.current.offsetTop)
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <StyledNav>
            <StyledNavItem onClick={() => scrollToSection(props.homeRef)} isActive={activeLink === 'home' ? true : false}>
                <span>home</span>
            </StyledNavItem>
            <StyledNavItem onClick={() => scrollToSection(props.aboutRef)} isActive={activeLink === 'about' ? true : false}>
                <span>about</span>
            </StyledNavItem>
            <StyledNavItem onClick={() => scrollToSection(props.productsRef)} isActive={activeLink === 'products' ? true : false}>
                <span>products</span>
            </StyledNavItem>
        </StyledNav>
    )
}

export default Navbar