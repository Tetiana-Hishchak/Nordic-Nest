import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { box, button, text } from './ai.styles';
import { h2 } from '~shared/styles';
const AI = () => {
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Выбранный файл:', file.name);
        }
    };
    return (_jsxs("div", { className: box, children: [_jsx("h2", { style: h2, children: "Let AI Help You Choose" }), _jsxs("p", { className: text, children: ["Upload a photo to let our AI analyze your style and suggest the perfect match. Get ", _jsx("br", {}), " personalized recommendations instantly!"] }), _jsx("input", { type: "file", ref: fileInputRef, style: { display: 'none' }, onChange: handleFileChange }), _jsx("button", { onClick: handleButtonClick, className: button, children: "Select file" })] }));
};
export default AI;
