import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import FacebookIcon from '../../../assets/facebook.png';
import InstagramIcon from '../../../assets/instagram.png';
import { a, box, contact, container, description, icon, section, titel, section_1 } from './footer.styles';
const Footer = () => {
    return (_jsxs("footer", { className: box, children: [_jsx("div", { className: titel, children: "NORDICNEST" }), _jsxs("div", { className: container, children: [_jsxs("div", { className: section, children: [_jsx(Link, { className: titel, to: "/", children: "EXPLORE" }), _jsx(Link, { className: description, to: "/shop", children: "Shop" }), _jsx(Link, { className: description, to: "/about-us", children: "About Us" }), _jsx(Link, { className: description, to: "/login", children: "Login" }), _jsx(Link, { className: description, to: "/card", children: "Card" })] }), _jsxs("div", { className: section, children: [_jsx("div", { className: titel, children: "CONTACT US" }), _jsx(Link, { className: description, to: "https://www.google.com/maps/place/Passeig+de+Garcia+F%C3%A0ria,+81,+Sant+Mart%C3%AD,+08019+Barcelona", children: _jsxs("span", { children: ["Passeig de Garcia F\u00E0ria, 81, Sant ", _jsx("br", {}), "Mart\u00ED, 08019 Barcelona"] }) }), _jsxs("span", { children: ["Customer Service: ", _jsx("br", {}), "Closed. Opens at 9:00 AM ET. ", _jsx("br", {}), "Weekly Hours"] })] }), _jsxs("div", { className: `${section} ${section_1}`, children: [_jsxs("div", { className: contact, children: ["Call us:", _jsx("a", { className: a, href: "tel:+34685090606", children: "+34 685 09 06 06" })] }), _jsxs("div", { className: contact, children: ["Write us: ", _jsx("a", { className: a, href: "mailto:nordic_nest@gmail.com", children: "nordic_nest@gmail.com" })] }), _jsxs("div", { style: { display: 'flex', gap: '10px' }, children: [_jsx("h3", { className: description, children: "Follow us:" }), _jsx(Link, { to: "/facebook", "aria-label": "Facebook", children: _jsx("img", { className: icon, src: FacebookIcon, alt: "facebook" }) }), _jsx(Link, { to: "/instagram", "aria-label": "Instagram", children: _jsx("img", { className: icon, src: InstagramIcon, alt: "instagram" }) })] }), _jsxs("div", { style: { display: 'flex', gap: '10px' }, children: [_jsx(Link, { className: description, to: "/feedback", children: "Leave feedback  " }), _jsx(Link, { to: "/facebook", "aria-label": "Facebook", children: _jsx("img", { className: icon, src: FacebookIcon, alt: "facebook" }) }), _jsx(Link, { to: "/instagram", "aria-label": "Instagram", children: _jsx("img", { className: icon, src: InstagramIcon, alt: "instagram" }) })] })] })] })] }));
};
export default Footer;
