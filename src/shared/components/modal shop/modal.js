import { jsx as _jsx } from "react/jsx-runtime";
import { modalContent, modalOverlay } from "./modal.styles";
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: modalOverlay, onClick: onClose, children: _jsx("div", { className: modalContent, onClick: (e) => e.stopPropagation(), children: children }) }));
};
export default Modal;
