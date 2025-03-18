import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { boxs } from "./abouts-us.style";
import AboutContent from '../components/aboutContent/about.content';
import BreadCrumbs from "../../../shared/components/Bread crumbs/Bread crumbs";
const AboutUsPage = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: boxs, children: [_jsx(BreadCrumbs, { title: 'About Us' }), _jsx(AboutContent, {})] }));
};
export default AboutUsPage;
