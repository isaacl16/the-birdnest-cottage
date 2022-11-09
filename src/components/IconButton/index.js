import { StyledIconButton } from './styles'

const IconButton = ({ onClick, icon }) => {
    return (
        <StyledIconButton onClick={onClick} icon={icon} />
    )
}

export default IconButton