import products from "../../assets/images/products"
import StyledButton from "../../components/Button"
import Icon from "../../components/Icon"
import { StyledColumn, StyledContainer, StyledDescription, StyledHeader, StyledImage, StyledTitle, StyledWrapper } from "./styles"

const ProductsContainer = (props) => {
    return (
        <StyledWrapper ref={props.productsRef}>
            <StyledHeader>
                <h1>Products</h1>
            </StyledHeader>
            <StyledContainer>
                <StyledColumn>
                    <StyledImage src={products.product} />
                    <StyledDescription>
                        <StyledTitle>BIRDNEST LEMONGRASS</StyledTitle>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage src={products.product} />
                    <StyledDescription>
                        <StyledTitle>BIRDNEST OSMANTHUS & MANUKA HONEY</StyledTitle>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage src={products.product} />
                    <StyledDescription>
                        <StyledTitle>BIRDNEST LOTUS SEED GOJI</StyledTitle>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage src={products.product} />
                    <StyledDescription>
                        <StyledTitle>BIRDNEST PEAR WOLFBERRY</StyledTitle>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage src={products.product} />
                    <StyledDescription>
                        <StyledTitle>BIRDNEST ROCK SUGAR</StyledTitle>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage src={products.product} />
                    <StyledDescription>
                        <StyledTitle>BIRDNEST CHINESE YAM GOJI</StyledTitle>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>

            </StyledContainer>
        </StyledWrapper>
    )
}

export default ProductsContainer