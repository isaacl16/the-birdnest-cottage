import icons from "../../assets/icons"
import { StyledIconButton } from './styles'

const IconButton = ({ onClick, link, icon }) => {
    return (
        <StyledIconButton onClick={() => onClick(link)} src={icons[icon]} />
    )
}

export default IconButton