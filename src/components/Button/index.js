import { StyledButton } from "./styles"

const Button = ({ children, onClick, outline = false, width = "240px" }) => {
    return (
        <StyledButton onClick={onClick} outline={outline} width={width}>
            {children}
        </StyledButton>
    )
}

export default Button