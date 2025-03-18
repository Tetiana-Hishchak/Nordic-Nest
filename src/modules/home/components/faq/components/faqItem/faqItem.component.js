import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import arrowUp from '~/assets/arrow-up.svg?url';
import arrowDown from '~/assets/arrow-down.svg?url';
import { answerStyle, faqItemStyle, iconStyle, questionStyle } from './faqItem.styles';
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("div", { className: faqItemStyle, children: [_jsxs("div", { className: questionStyle, onClick: () => setIsOpen(!isOpen), children: [_jsx("span", { children: question }), _jsx("img", { src: isOpen ? arrowUp : arrowDown, alt: "toggle icon", className: iconStyle })] }), isOpen && _jsx("p", { className: answerStyle, children: answer })] }));
};
export default FAQItem;
