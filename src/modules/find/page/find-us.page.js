import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { boxs } from "./find-us.style";
import AboutContent from '../components/findContent/find.content';
import BreadCrumbs from "../../../shared/components/Bread crumbs/Bread crumbs";
const FindUsPage = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: boxs, children: [_jsx(BreadCrumbs, { title: 'Find Us' }), _jsx(AboutContent, {})] }));
};
export default FindUsPage;
