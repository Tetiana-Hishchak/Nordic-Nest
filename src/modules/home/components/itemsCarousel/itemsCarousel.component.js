import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import Slider from 'react-slick';
import right from '~assets/icon-arrow-right.svg?url';
import left from '~assets/icon-arrow-left.svg?url';
import { h2 } from '~shared/styles';
import ProductCard from '~shared/components/productCard/productCard.component';
import img from '~/assets/faq-image.png';
import { arrowsContainer, headerContainer, nextArrowStyle, prevArrowStyle, slickArrow, sliderContainer, } from './itemsCarousel.styles';
const products = [
    {
        image: img,
        title: 'Product 1',
        price: 99,
        category: 'Kitchen',
        isNew: true,
    },
    {
        image: img,
        title: 'Product 2',
        price: 120,
        category: 'Living Room',
        isNew: false,
    },
    {
        image: img,
        title: 'Product 3',
        price: 80,
        category: 'Bedroom',
        isNew: true,
    },
    {
        image: img,
        title: 'Product 4',
        price: 150,
        category: 'Office',
        isNew: false,
    },
];
const ItemsCarousel = () => {
    const sliderRef = useRef(null);
    const goNext = () => sliderRef.current?.slickNext();
    const goPrev = () => sliderRef.current?.slickPrev();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: headerContainer, children: [_jsx("h2", { style: h2, children: "BUILT FOR A LIFETIME" }), _jsxs("div", { className: arrowsContainer, children: [_jsx("button", { className: `${slickArrow} ${prevArrowStyle}`, onClick: goPrev, children: _jsx("img", { src: left, alt: "Prev" }) }), _jsx("button", { className: `${slickArrow} ${nextArrowStyle}`, onClick: goNext, children: _jsx("img", { src: right, alt: "Next" }) })] })] }), _jsx("div", { className: sliderContainer, children: _jsx(Slider, { ref: sliderRef, ...settings, children: products.map((product, index) => (_jsx(ProductCard, { ...product }, index))) }) })] }));
};
export default ItemsCarousel;
