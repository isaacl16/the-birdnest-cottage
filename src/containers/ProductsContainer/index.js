import products from "../../assets/images/products"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Icon from "../../components/Icon"
import { StyledContainer, StyledHeader, StyledWrapper } from "./styles"

const ProductsContainer = (props) => {
    return (
        <StyledWrapper animate={props.animate} ref={props.productsRef}>
            <StyledHeader>
                <h1>Products</h1>
            </StyledHeader>
            <StyledContainer>
                <Card image={products.product} title="BIRDNEST LEMONGRASS" />
                <Card image={products.product} title="BIRDNEST OSMANTHUS & MANUKA HONEY" />
                <Card image={products.product} title="BIRDNEST LOTUS SEED GOJI" />
                <Card image={products.product} title="BIRDNEST PEAR WOLFBERRY" />
                <Card image={products.product} title="BIRDNEST ROCK SUGAR" />
                <Card image={products.product} title="BIRDNEST CHINESE YAM GOJI" />
            </StyledContainer>
        </StyledWrapper>
    )
}

export default ProductsContainer