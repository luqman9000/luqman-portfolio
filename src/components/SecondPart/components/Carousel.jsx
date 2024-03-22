import Slider from "react-slick/lib/slider";
import './styles.css'
import CarouselCard from "./CarouselCard";

const Carousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        lazyload: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                <CarouselCard/>
                <CarouselCard/>
                <CarouselCard/>
                <CarouselCard/>
            </Slider>
        </div>
    );
}
export default Carousel;