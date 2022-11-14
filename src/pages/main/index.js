import { useRef, useState } from "react"
import AboutContainer from "../../containers/AboutContainer"
import Footer from "../../containers/Footer"
import Header from "../../containers/Header"
import HomeContainer from "../../containers/HomeContainer"
import ProductsContainer from "../../containers/ProductsContainer"
import { useScroll } from "../../hooks"
import { StyledLayout } from "./styled"

const Main = () => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const productsRef = useRef(null)


    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false
    });

    const onScroll = () => {
        const topPos = element => element.offsetTop;
        const aboutPosition = topPos(aboutRef.current),
            productsPosition = topPos(productsRef.current)
        const scrollPos = window.pageYOffset;
        if (aboutPosition - 400 < scrollPos) {
            doShow(state => ({ ...state, itemTwo: true }));
        }
        if (productsPosition - 400 < scrollPos) {
            doShow(state => ({ ...state, itemThree: true }));
        }
    };
    useScroll(onScroll)

    return (
        <StyledLayout>
            <Header homeRef={homeRef} aboutRef={aboutRef} productsRef={productsRef} />
            <HomeContainer homeRef={homeRef} />
            <AboutContainer animate={show.itemTwo} aboutRef={aboutRef} />
            <ProductsContainer animate={show.itemThree} productsRef={productsRef} />
            <Footer />
        </StyledLayout>
    )
}

export default Main