import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FAQList from './components/faqList/faqList.component';
import img from '~/assets/faq-image.png';
import { contentStyle, faqStyle, imageStyle } from './faq.styles';
const FAQ = () => {
    return (_jsx("div", { className: faqStyle, children: _jsxs("div", { className: contentStyle, children: [_jsx(FAQList, {}), _jsx("img", { src: img, className: imageStyle })] }) }));
};
export default FAQ;
