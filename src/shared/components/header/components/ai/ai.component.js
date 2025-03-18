import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AIIcon from '~/assets/ai-icon.svg?url';
import AIIconDark from '~/assets/ai-icon-dark.svg?url';
import { box } from './ai.styles';
import { useThemeStore } from '~shared/stores/theme.store';
import { Link } from 'react-router-dom';
const AI = () => {
    const isLight = useThemeStore((state) => state.isLight);
    return (_jsx(Link, { to: "/ai", children: _jsxs("div", { className: box(isLight), children: [_jsx("img", { src: isLight ? AIIconDark : AIIcon, alt: "ai icon" }), _jsx("p", { children: "AI Help" })] }) }));
};
export default AI;
