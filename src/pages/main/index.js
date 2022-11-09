import { useEffect, useRef } from "react"

import AboutContainer from "../../containers/AboutContainer"
import Footer from "../../containers/Footer"
import Header from "../../containers/Header"
import HomeContainer from "../../containers/HomeContainer"
import ProductsContainer from "../../containers/ProductsContainer"
import { StyledLayout } from "./styled"

const Main = () => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const productsRef = useRef(null)
    return (
        <StyledLayout>
            <Header homeRef={homeRef} aboutRef={aboutRef} productsRef={productsRef} />
            <HomeContainer homeRef={homeRef} />
            <AboutContainer aboutRef={aboutRef} />
            <ProductsContainer productsRef={productsRef} />
            <Footer />
        </StyledLayout>
    )
}

export default Main