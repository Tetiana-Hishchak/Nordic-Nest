import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import Slider from 'react-slick';
import Slide1 from '~/assets/slider-1.png';
import Slide2 from '~/assets/slider-2.png';
import right from '~assets/icon-arrow-right.svg?url';
import left from '~assets/icon-arrow-left.svg?url';
import { arrowsContainer, headerContainer, nextArrowStyle, prevArrowStyle, slickArrow, sliderContainer, } from './categoriesCarousel.styles';
import { h2 } from '~shared/styles';
const slides = [Slide1, Slide2, Slide1, Slide2];
const CategorySlider = () => {
    const sliderRef = useRef(null);
    const goNext = () => sliderRef.current?.slickNext();
    const goPrev = () => sliderRef.current?.slickPrev();
    const settings = {
        infinite: true, // Бесконечный листинг
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, // Отключаем стандартные стрелки
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: headerContainer, children: [_jsx("h2", { style: h2, children: "EXPLORE CATEGORIES" }), _jsxs("div", { className: arrowsContainer, children: [_jsx("button", { className: `${slickArrow} ${prevArrowStyle}`, onClick: goPrev, children: _jsx("img", { src: left, alt: "Prev" }) }), _jsx("button", { className: `${slickArrow} ${nextArrowStyle}`, onClick: goNext, children: _jsx("img", { src: right, alt: "Next" }) })] })] }), _jsx("div", { className: sliderContainer, children: _jsx(Slider, { ref: sliderRef, ...settings, children: slides.map((src, index) => (_jsxs("div", { children: [_jsx("img", { src: src, alt: `Slide ${index + 1}` }), _jsx("p", { children: "Kitchen" })] }, index))) }) })] }));
};
export default CategorySlider;
