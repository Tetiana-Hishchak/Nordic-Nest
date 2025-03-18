import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import heartIcon from '~assets/icon-heart-dark.svg?url';
import { addToCartButton, cardStyle, categoryStyle, favoriteButton, headerStyle, imageContainer, imageStyle, infoStyle, newLabel, overlay, priceStyle, titleStyle, } from './productCard.styles';
const ProductCard = ({ image, title, price, category, isNew, }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    return (_jsxs("div", { className: cardStyle, children: [_jsxs("div", { className: imageContainer, children: [isNew && _jsx("span", { className: newLabel, children: "New" }), _jsx("img", { src: image, alt: title, className: imageStyle }), _jsx("button", { className: favoriteButton, onClick: () => setIsFavorite(!isFavorite), children: _jsx("img", { src: heartIcon, alt: "Favorite", className: favoriteButton }) }), _jsx("div", { className: overlay, children: _jsx("div", { className: addToCartButton, children: "ADD TO CART" }) })] }), _jsxs("div", { className: infoStyle, children: [_jsxs("div", { className: headerStyle, children: [_jsx("h3", { className: titleStyle, children: title }), _jsxs("span", { className: priceStyle, children: ["$", price] })] }), _jsxs("p", { className: categoryStyle, children: ["For ", category] })] })] }));
};
export default ProductCard;
