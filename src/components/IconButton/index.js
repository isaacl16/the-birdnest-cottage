import icons from "../../assets/icons"
import { StyledIconButton } from './styles'

const IconButton = ({ onClick, icon }) => {
    return (
        <StyledIconButton onClick={onClick} src={icons[icon]} />
    )
}

export default IconButton