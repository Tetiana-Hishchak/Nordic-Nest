import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Slider from 'react-slick';
import Slide1 from '~/assets/slider1.png';
import Slide2 from '~/assets/slider2.png';
import Slide3 from '~/assets/slider3.png';
import Slide4 from '~/assets/slider4.png';
import Text from './components/text.component';
import { sliderContainer } from './slider.styles';
const slides = [Slide1, Slide2, Slide3, Slide4];
const SliderComponent = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: sliderContainer, children: [_jsx(Text, {}), _jsx(Slider, { ...settings, children: slides.map((src, index) => (_jsx("div", { children: _jsx("img", { src: src, alt: `Slide ${index + 1}` }) }, index))) })] }) }));
};
export default SliderComponent;
