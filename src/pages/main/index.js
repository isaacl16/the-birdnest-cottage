import { useRef, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner from "../../assets/images/banner";
import AboutContainer from "../../containers/AboutContainer";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import HomeContainer from "../../containers/HomeContainer";
import ProductsContainer from "../../containers/ProductsContainer";
import { useScroll } from "../../hooks";
import { StyledBackground, StyledContainer, StyledLayout } from "./styles";

const Main = () => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const productsRef = useRef(null)
    const [modal, setModal] = useState(true)


    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false
    });

    const onScroll = () => {
        const topPos = element => element.offsetTop;
        const aboutPosition = topPos(aboutRef.current),
            productsPosition = topPos(productsRef.current)
        const scrollPos = window.pageYOffset;
        if (aboutPosition - 400 < scrollPos) {
            doShow(state => ({ ...state, itemTwo: true }));
        }
        if (productsPosition - 400 < scrollPos) {
            doShow(state => ({ ...state, itemThree: true }));
        }
    };
    useScroll(onScroll)

    const closeOnClick = () => {
        setModal(false)
    }
    return (
        <StyledLayout>
            {
                modal ?
                    <>
                        <StyledBackground onClick={closeOnClick} />
                        <StyledContainer>
                            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={5000} showThumbs={false}>
                                <div>
                                    <img src={banner[1]} alt="Not Found" />
                                    <p className="legend">Promo 1</p>
                                </div>
                                <div>
                                    <img src={banner[2]} alt="Not Found" />
                                    <p className="legend">Promo 2</p>
                                </div>
                                <div>
                                    <img src={banner[3]} alt="Not Found" />
                                    <p className="legend">Promo 3</p>
                                </div>
                                <div>
                                    <img src={banner[4]} alt="Not Found" />
                                    <p className="legend">Promo 4</p>
                                </div>
                                <div>
                                    <img src={banner[5]} alt="Not Found" />
                                    <p className="legend">Promo 5</p>
                                </div>
                                <div>
                                    <img src={banner[6]} alt="Not Found" />
                                    <p className="legend">Promo 6</p>
                                </div>

                            </Carousel>
                        </StyledContainer>
                    </>
                    : <></>
            }
            <Header homeRef={homeRef} aboutRef={aboutRef} productsRef={productsRef} />
            <HomeContainer homeRef={homeRef} />
            <AboutContainer animate={show.itemTwo} aboutRef={aboutRef} />
            <ProductsContainer animate={show.itemThree} productsRef={productsRef} />
            <Footer />
        </StyledLayout>
    )
}

export default Main