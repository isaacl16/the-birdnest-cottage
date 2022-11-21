import { useMemo } from "react"
import products from "../../assets/images/products"
import Card from "../../components/Card"
import data from "../../data/products.json"
import { onClickRedirect } from "../../utils"
import { StyledContainer, StyledHeader, StyledWrapper } from "./styles"

const ProductsContainer = (props) => {

    const renderProducts = useMemo(() => {
        return data.length ?
            data.map((product) => {
                return <Card image={products[product.image]} title={product.title} price1={product.price1} price2={product.price2} onClick={() => onClickRedirect("https://www.lazada.sg")} />
            })
            : <p>No Products Found</p>
    }, [])

    return (
        <StyledWrapper animate={props.animate} ref={props.productsRef}>
            <StyledHeader>
                <h1>Products</h1>
            </StyledHeader>
            <StyledContainer>
                {renderProducts}
            </StyledContainer>
        </StyledWrapper>
    )
}

export default ProductsContainer