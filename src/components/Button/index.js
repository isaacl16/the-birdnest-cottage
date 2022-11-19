import { StyledButton } from "./styles"

const Button = ({ children, onClick, link, outline = false, width = "240px" }) => {
    return (
        <StyledButton onClick={() => onClick(link)} outline={outline} width={width}>
            {children}
        </StyledButton>
    )
}

export default Button