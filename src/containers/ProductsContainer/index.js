import StyledButton from "../../components/Button"
import Icon from "../../components/Icon"
import { StyledColumn, StyledContainer, StyledDescription, StyledHeader, StyledImage, StyledWrapper } from "./styles"


const ProductsContainer = (props) => {
    return (
        <StyledWrapper ref={props.productsRef}>
            <StyledHeader>
                <h1>Products</h1>
            </StyledHeader>
            <StyledContainer>
                <StyledColumn>
                    <StyledImage />
                    <StyledDescription>
                        <p>BIRDNEST LEMONGRASS</p>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage />
                    <StyledDescription>
                        <p>BIRDNEST OSMANTHUS & MANUKA HONEY</p>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage />
                    <StyledDescription>
                        <p>BIRDNEST LOTUS SEED GOJI</p>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage />
                    <StyledDescription>
                        <p>BIRDNEST PEAR WOLFBERRY</p>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage />
                    <StyledDescription>
                        <p>BIRDNEST ROCK SUGAR</p>
                        <p>500G - $1000</p>
                        <p>100G - $210</p>
                    </StyledDescription>
                    <StyledButton width="100%">
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledColumn>
                <StyledColumn>
                    <StyledImage />
                    <StyledDescription>
                        <p>BIRDNEST CHINESE YAM GOJI</p>
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