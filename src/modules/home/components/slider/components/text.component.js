import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '~shared/components/button/button.component';
import { box, button, heading, text } from './text.styles';
const Text = () => {
    return (_jsxs("div", { className: box, children: [_jsx("h1", { className: heading, children: "EXCLUSIVE LUXURY FURNITURE" }), _jsx("div", { className: button, children: _jsx(Button, { text: "Shop Now", type: "button" }) }), _jsx("p", { className: text, children: "Timeless design. Unmatched quality. Crafted for you" })] }));
};
export default Text;
