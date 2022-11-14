import icons from "../../assets/icons"
import { StyledIcon } from "./styles"

const Icon = (props) => {
    return (
        <StyledIcon src={icons[props.icon]} />
    )
}

export default Icon