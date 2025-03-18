import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { container, box, title, text, infoBlock, contactContainer, icon, link, imageArrow, block, footerText } from './find.content.style'; // виправлено 'titel' на 'title'
import IconPhone from '../../../../assets/iconTelephon.svg?url';
import IconEmail from '../../../../assets/iconEmail.svg?url';
import IconLocation from '../../../../assets/iconLocation.svg?url';
import { Link } from "react-router-dom";
import MyMap from "../maps/maps.component";
import Arrow from '../../../../assets/icon-arrow-right.svg?url';
export const AboutContent = () => {
    return (_jsx("section", { className: container, children: _jsxs("div", { className: box, children: [_jsx("h2", { className: title, children: "FIND US" }), _jsxs("div", { className: contactContainer, children: [_jsxs("div", { className: block, children: [_jsxs("div", { className: infoBlock, children: [_jsx("img", { className: icon, src: IconLocation, alt: "IconLocation" }), _jsxs("p", { className: text, children: [" Location:", _jsx(Link, { className: link, to: "https://www.google.com/maps/place/Passeig+de+Garcia+F%C3%A0ria,+81,+Sant+Mart%C3%AD,+08019+Barcelona", children: "Passeig de Garcia F\u00E0ria, 81, Sant Mart\u00ED, 08019 Barcelona" })] })] }), _jsxs("div", { style: { display: "flex", justifyContent: "center" }, children: [_jsx(Link, { className: link, to: "https://www.google.com/maps/place/Passeig+de+Garcia+F%C3%A0ria,+81,+Sant+Mart%C3%AD,+08019+Barcelona", children: "Open Google Maps" }), _jsx("img", { className: imageArrow, src: Arrow, alt: "Arrow" })] })] }), _jsx(MyMap, {}), _jsxs("div", { className: infoBlock, children: [_jsx("img", { className: icon, src: IconPhone, alt: "IconPhone" }), _jsxs("p", { className: text, children: ["Contact Us:", _jsx("a", { className: link, href: "tel:+34685090606", children: "+34 685 09 06 06" })] })] }), _jsxs("div", { className: infoBlock, children: [_jsx("img", { className: icon, src: IconEmail, alt: "IconEmail" }), _jsxs("p", { className: text, children: ["Email: ", _jsx("a", { className: link, href: "mailto:nordic_nest@gmail.com", children: "nordic_nest@gmail.com" })] })] }), _jsx("p", { className: footerText, children: "Let us help you create a home that is truly one of a kind." })] })] }) }));
};
export default AboutContent;
