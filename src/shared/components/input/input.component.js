import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { inputStyles, inputWrapper, errorTextStyles } from './input.styles';
const Input = ({ value, onChange, placeholder = '', type = 'text', name, disabled = false, error, extraInputStyles, extraWrapperStyles, }) => {
    return (_jsxs("div", { className: classNames(inputWrapper, extraWrapperStyles), children: [_jsx("input", { type: type, name: name, value: value, onChange: onChange, placeholder: placeholder, disabled: disabled, className: classNames(inputStyles(Boolean(error)), extraInputStyles) }), error && _jsx("span", { className: errorTextStyles, children: error })] }));
};
export default Input;
