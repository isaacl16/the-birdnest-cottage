import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { useEffect, useRef, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { fetchCloudinaryImages } from "../../apis";
import AboutContainer from "../../containers/AboutContainer";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import HomeContainer from "../../containers/HomeContainer";
import ProductsContainer from "../../containers/ProductsContainer";
import { useResize, useScroll } from "../../hooks";
import { StyledBackground, StyledContainer, StyledLayout } from "./styles";

const Main = () => {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const productsRef = useRef(null)
    const [modal, setModal] = useState(true)
    const [bannerImages, setBannerImages] = useState([])
    const [isMobile, setIsMobile] = useState(false)


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

    const closeOnClick = () => {
        setModal(false)
    }

    const getWindowSize = () => {
        const width = window.innerWidth
        let flag = false
        if (width <= 480) {
            console.log("here")
            flag = true
        }
        setIsMobile(flag)
        return flag
    }

    useEffect(() => {
        const fetchData = async (flag) => {
            const res = await fetchCloudinaryImages(flag)
            setBannerImages(res.data.resources)
        }
        fetchData(getWindowSize())
    }, [])

    const renderBannerImages = () => {
        return bannerImages.map((data) => {
            const cld = new Cloudinary({
                cloud: {
                    cloudName: cloudName
                }
            });
            const image = cld.image(data.public_id);
            return <AdvancedImage cldImg={image} />
        })

    }

    useScroll(onScroll)
    useResize(getWindowSize)

    return (
        <StyledLayout>
            {
                modal && bannerImages.length > 0 ?
                    <>
                        <StyledBackground onClick={closeOnClick} />
                        <StyledContainer>
                            <Carousel showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={5000} showThumbs={false}>
                                {
                                    renderBannerImages()
                                }
                            </Carousel>
                        </StyledContainer>
                    </>
                    : <></>
            }
            <Header homeRef={homeRef} aboutRef={aboutRef} productsRef={productsRef} isMobile={isMobile} />
            <HomeContainer homeRef={homeRef} />
            <AboutContainer animate={show.itemTwo} aboutRef={aboutRef} />
            <ProductsContainer animate={show.itemThree} productsRef={productsRef} />
            <Footer />
        </StyledLayout>
    )
}

export default Main