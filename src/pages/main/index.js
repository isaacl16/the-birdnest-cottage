import AboutContainer from "../../containers/AboutContainer"
import Footer from "../../containers/Footer"
import Header from "../../containers/Header"
import HomeContainer from "../../containers/HomeContainer"
import ProductsContainer from "../../containers/ProductsContainer"
import { StyledLayout } from "./styled"

const Main = () => {
    return (
        <StyledLayout>
            <Header />
            <HomeContainer />
            <AboutContainer />
            <ProductsContainer />
            <Footer />
        </StyledLayout>
    )
}

export default Main