import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { spaceItem, title } from './space.styles';
const SPACE_LINKS = [
    { path: '/kitchen', label: 'Kitchen' },
    { path: '/living room', label: 'Living Room' },
    { path: '/bedroom', label: 'Bedroom' },
    { path: '/childrens room', label: 'Childrens`room' },
    { path: '/office', label: 'Office' },
    { path: '/outdoor', label: 'Outdoor' },
];
const Space = () => {
    return (_jsxs("div", { children: [_jsx("h5", { className: title, children: "SPACE" }), _jsx("ul", { children: SPACE_LINKS.map(({ path, label }) => (_jsx("li", { children: _jsx(Link, { className: spaceItem, to: path, children: label }) }, path))) })] }));
};
export default Space;
