import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Exclusive from '../../../../assets/exclusive.png';
import ArrowRight from '../../../../assets/arrow to the right.png';
import { container, box, icon, imageStyle, titel, description, field, form, container_field, button } from "./exclusiveCircle.styles";
const ExclusiveCircle = () => {
    return (_jsxs("section", { className: container, children: [_jsx("div", { className: box, children: _jsx("img", { className: imageStyle, src: Exclusive, alt: "exlusive circle" }) }), _jsxs("div", { className: box, children: [_jsxs("h2", { className: titel, children: ["JOIN OUR EXCLUSIVE ", _jsx("br", {}), " CIRCLE"] }), _jsx("p", { className: description, children: "Sign up now and enjoy 10% off your first order! Be the first to discover our new collections, limited-edition antiques, and exclusive offers\u2014before anyone else!" }), _jsx("form", { className: form, action: "#", method: "get", children: _jsxs("div", { className: container_field, children: [_jsx("input", { name: "email", placeholder: "Enter your email below to unlock your discount", type: "email", className: field, required: true }), _jsx("button", { type: "submit", className: button, children: _jsx("img", { className: icon, src: ArrowRight, alt: "arrow icon" }) })] }) })] })] }));
};
export default ExclusiveCircle;
