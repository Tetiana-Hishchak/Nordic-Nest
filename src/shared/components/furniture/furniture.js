import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { spaceItem, title } from './furniture.styles';
const FURNITURE_LINKS = [
    { path: '/lighting', label: 'Lighting' },
    { path: '/sofas', label: 'Sofas' },
    { path: '/sliding-wardrobes', label: 'Sliding Wardrobes' },
    { path: '/tables', label: 'Tables' },
    { path: '/chairs', label: 'Chairs' },
    { path: '/headboards-beds', label: 'Headboards & Beds' },
    { path: '/cabinets-sideboards', label: 'Cabinets & Sideboards' }
];
const Furniture = () => {
    return (_jsxs("div", { children: [_jsx("h5", { className: title, children: "FURNITURE" }), _jsx("ul", { children: FURNITURE_LINKS.map(({ path, label }) => (_jsx("li", { children: _jsx(Link, { className: spaceItem, to: path, children: label }) }, path))) })] }));
};
export default Furniture;
