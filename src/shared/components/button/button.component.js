import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Loader from '../loader/loader.component';
import classNames from 'classnames';
import { btnContentWrapper, btnStyles, iconWrapper, mr } from './button.styles';
import { cx } from '@emotion/css';
const Button = ({ text, type = 'submit', onClick, loading, disabled, extraButtonStyles, icon, }) => {
    const isDisabled = Boolean(loading ?? disabled);
    const handleClick = () => {
        if (isDisabled) {
            return;
        }
        onClick?.();
    };
    return (_jsx("button", { disabled: isDisabled, type: type, onClick: handleClick, className: cx(btnStyles(Boolean(disabled)), extraButtonStyles), children: loading ? (_jsx(Loader, {})) : (_jsxs("p", { className: btnContentWrapper, children: [icon && (_jsx("p", { className: classNames(iconWrapper, {
                        [mr]: Boolean(text),
                    }), children: icon })), text] })) }));
};
export default Button;
