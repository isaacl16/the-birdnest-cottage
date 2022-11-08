import { StyledButton } from "./styles"

const Button = ({ children, onClick, outline }) => {
    return (
        <StyledButton onClick={onClick} outline={outline}>
            {children}
        </StyledButton>
    )
}

export default Button