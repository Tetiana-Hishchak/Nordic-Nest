import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { h2 } from '~shared/styles';
import { box, button, content, image, modal, modalOpen, modalOverlay, closeButton, contentGrid, } from './getTheLook.styles';
import getTheLook from '~assets/get-the-look.png';
import closeIcon from '~assets/icon-close.svg?url';
import ProductCard from '~shared/components/productCard/productCard.component';
import img from '~/assets/faq-image.png';
import Button from '~shared/components/button/button.component';
const GetTheLook = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: box, children: [_jsx("h2", { style: h2, children: "FURNITURE THAT DEFINES YOU" }), _jsxs("div", { className: content, children: [_jsx("img", { src: getTheLook, alt: "getTheLook", className: image }), _jsx("button", { className: button, onClick: () => setIsOpen(true), children: _jsx(Button, { text: "Get the look", type: "button" }) })] })] }), isOpen && (_jsxs(_Fragment, { children: [_jsx("div", { className: modalOverlay, onClick: () => setIsOpen(false) }), _jsxs("div", { className: `${modal} ${isOpen ? modalOpen : ''}`, children: [_jsxs("div", { style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }, children: [_jsx("button", { className: closeButton, onClick: () => setIsOpen(false), children: _jsx("img", { src: closeIcon, alt: "Close", className: closeButton }) }), _jsx("h2", { style: {
                                            ...h2,
                                            flexGrow: 1,
                                            textAlign: 'center',
                                            margin: 0,
                                        }, children: "GET THE LOOK" })] }), _jsxs("div", { className: contentGrid, children: [_jsx(ProductCard, { image: img, title: "Bed Vintage", price: 400, category: "Living Room", isNew: true }), _jsx(ProductCard, { image: img, title: "Bed Vintage", price: 400, category: "Living Room", isNew: true }), _jsx(ProductCard, { image: img, title: "Bed Vintage", price: 400, category: "Living Room", isNew: true }), _jsx(ProductCard, { image: img, title: "Bed Vintage", price: 400, category: "Living Room", isNew: true })] })] })] }))] }));
};
export default GetTheLook;
