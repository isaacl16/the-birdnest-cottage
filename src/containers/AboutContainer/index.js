import images from "../../assets/images"
import Icon from "../../components/Icon"
import { StyledChild, StyledContainer, StyledHeader, StyledIconWrapper, StyledImage, StyledWrapper } from "./styles"

const AboutContainer = (props) => {
    return (
        <StyledWrapper ref={props.aboutRef}>
            <StyledHeader>
                <h1>About</h1>
            </StyledHeader>
            <StyledContainer>
                <StyledChild>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor eleifend ex eget tempus. Sed blandit ultricies metus a mollis. Vestibulum sodales pulvinar neque a ultrices. Maecenas mattis placerat tellus at volutpat. Integer hendrerit arcu vel pretium posuere. Proin ac sollicitudin ante. Duis nunc sem, dapibus eget eros in, facilisis laoreet tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        {'\n'}
                        Vestibulum sapien ipsum, pretium sit amet nunc at, feugiat imperdiet risus. Etiam fermentum dictum ipsum, id lobortis sapien. Aenean sollicitudin nec massa ac dictum. Mauris sed ante neque. Nullam sodales sodales gravida.
                    </div>
                    <StyledIconWrapper>
                        <Icon icon="instagram" />
                        <Icon icon="mail" />
                    </StyledIconWrapper>
                </StyledChild>
                <StyledChild>
                    <StyledImage src={images.about} />
                </StyledChild>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default AboutContainer