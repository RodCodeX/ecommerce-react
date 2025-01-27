import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import { CSSProperties } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselContainer = () => {
    const arrowStyles: CSSProperties = {
        position: "absolute",
        zIndex: 2,
        top: "calc(30% - 15px)",
        width: 50,
        height: 50,
        cursor: "pointer",
        filter: "drop-shadow(1px 3px 1px rgb(255 255 255 / 0.8))",
        color: "#404040",
    };

    return (
        <Carousel
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button
                        className=""
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{ ...arrowStyles, left: 15 }}
                    >
                        <ChevronLeftIcon />
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{ ...arrowStyles, right: 15 }}
                    >
                        <ChevronRightIcon />
                    </button>
                )
            }
            showStatus={false}
            showArrows={true}
            infiniteLoop={true}
            emulateTouch={true}
            autoPlay={true}
            showIndicators={false}
            showThumbs={false}
        >
            <div>
                <Image src="/carousel/slider-1.jpg" alt="slider1" width={1200} height={600} />
            </div>
            <div>
                <Image src="/carousel/slider-2.jpg" alt="slider2" width={1200} height={600} />
            </div>
            <div>
                <Image src="/carousel/slider-3.jpg" alt="slider3" width={1200} height={600} />
            </div>
            <div>
                <Image src="/carousel/slider-4.jpg" alt="slider4" width={1200} height={600} />
            </div>
            <div>
                <Image src="/carousel/slider-5.jpg" alt="slider5" width={1200} height={600} />
            </div>
        </Carousel>
    );
};

export default CarouselContainer;