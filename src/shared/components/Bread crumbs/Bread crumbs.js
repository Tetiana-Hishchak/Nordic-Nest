import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { container, imageStyle, titleHome, } from './Bread crumbs.style';
import Arrow from '../../../assets/icon-arrow-right.svg?url';
export const BreadCrumbs = ({ title }) => {
    return (_jsxs("div", { className: container, children: [_jsxs(Link, { className: titleHome, to: "/", children: ["Home", _jsx("img", { className: imageStyle, src: Arrow, alt: "Arrow" })] }), _jsx(Link, { className: title, to: `/${title.toLowerCase()}`, children: title })] }));
};
export default BreadCrumbs;
