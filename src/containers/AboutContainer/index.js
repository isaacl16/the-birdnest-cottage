import images from "../../assets/images"
import IconButton from "../../components/IconButton"
import { onClickRedirect } from "../../utils"
import { StyledChild, StyledContainer, StyledHeader, StyledIconWrapper, StyledImage, StyledWrapper } from "./styles"

const AboutContainer = (props) => {

    return (
        <StyledWrapper ref={props.aboutRef}>
            <StyledHeader animate={props.animate}>
                <h1>About</h1>
            </StyledHeader>
            <StyledContainer animate={props.animate}>
                <StyledChild>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor eleifend ex eget tempus. Sed blandit ultricies metus a mollis. Vestibulum sodales pulvinar neque a ultrices. Maecenas mattis placerat tellus at volutpat. Integer hendrerit arcu vel pretium posuere. Proin ac sollicitudin ante. Duis nunc sem, dapibus eget eros in, facilisis laoreet tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        {'\n'}
                        Vestibulum sapien ipsum, pretium sit amet nunc at, feugiat imperdiet risus. Etiam fermentum dictum ipsum, id lobortis sapien. Aenean sollicitudin nec massa ac dictum. Mauris sed ante neque. Nullam sodales sodales gravida.
                    </div>
                    <StyledIconWrapper>
                        <IconButton onClick={() => onClickRedirect("https://www.instagram.com")} icon="instagram" />
                        <IconButton icon="mail" onClick={() => onClickRedirect("mailto:contact@thebirdnestcottage.com")} link="#" />
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