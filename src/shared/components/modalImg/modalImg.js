import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { icon } from './modalImg.styles';
import Bestsellers from '../../../assets/bestsellers.png';
import NewIn from '../../../assets/new in.png';
const ModalImg = () => {
    return (_jsxs("div", { style: { display: 'flex', gap: '40px' }, children: [_jsx("img", { className: icon, src: Bestsellers, alt: "bestsellers" }), _jsx("img", { className: icon, src: NewIn, alt: "New in" })] }));
};
export default ModalImg;
