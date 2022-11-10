import StyledButton from "../../components/Button"
import Icon from "../../components/Icon"
import { StyledChild, StyledContainer, StyledHeader, StyledImage, StyledWrapper } from "./styles"


const ProductsContainer = (props) => {
    return (
        <StyledWrapper ref={props.productsRef}>
            <StyledHeader>
                <h1>Products</h1>
            </StyledHeader>
            <StyledContainer>
                <StyledChild>
                    <StyledImage />
                    <p>BIRDNEST LEMONGRASS</p>
                    <p>500G - $1000</p>
                    <p>100G - $210</p>
                    <StyledButton>
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledChild>
                <StyledChild>
                    <StyledImage />
                    <p>BIRDNEST OSMANTHUS & MANUKA HONEY</p>
                    <p>500G - $1000</p>
                    <p>100G - $210</p>
                    <StyledButton>
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledChild>
                <StyledChild>
                    <StyledImage />
                    <p>BIRDNEST LOTUS SEED GOJI</p>
                    <p>500G - $1000</p>
                    <p>100G - $210</p>
                    <StyledButton>
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledChild>
                <StyledChild>
                    <StyledImage />
                    <p>BIRDNEST PEAR WOLFBERRY</p>
                    <p>500G - $1000</p>
                    <p>100G - $210</p>
                    <StyledButton>
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledChild>
                <StyledChild>
                    <StyledImage />
                    <p>BIRDNEST ROCK SUGAR</p>
                    <p>500G - $1000</p>
                    <p>100G - $210</p>
                    <StyledButton>
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledChild>
                <StyledChild>
                    <StyledImage />
                    <p>BIRDNEST CHINESE YAM GOJI</p>
                    <p>500G - $1000</p>
                    <p>100G - $210</p>
                    <StyledButton>
                        <Icon icon="cart" />
                    </StyledButton>
                </StyledChild>

            </StyledContainer>
        </StyledWrapper>
    )
}

export default ProductsContainer