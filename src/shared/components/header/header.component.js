import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoDark from '~/assets/nordic-nest-dark.svg';
import LogoLight from '~/assets/nordic-nest.svg';
import { ai, box, section } from './header.styles';
import SearchBar from './components/searchBar/searchbar.component';
import Navigation from './components/navigation/navigation.component';
import UserActions from './components/userActions/userActions.component';
import { useThemeStore } from '~shared/stores/theme.store';
import AI from './components/ai/ai.component';
const LOGOS = {
    light: _jsx(LogoDark, {}),
    dark: _jsx(LogoLight, {}),
};
const Header = React.memo(({ onShopClick }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/'; // Перевіряємо, чи це головна сторінка
    const isLight = useThemeStore((state) => state.isLight);
    // На головній сторінці тема змінюється, на інших завжди світла
    const currentTheme = isHomePage ? isLight : true;
    return (_jsxs("div", { className: box(currentTheme), children: [_jsxs("div", { className: section, children: [_jsx(Link, { to: '/', children: currentTheme ? LOGOS.light : LOGOS.dark }), _jsx("div", { className: "search", children: _jsx(SearchBar, {}) })] }), _jsx("div", { className: ai, children: _jsx(AI, {}) }), _jsxs("div", { className: section, children: [_jsx(Navigation, { onShopClick: onShopClick, isModalOpen: false }), _jsx(UserActions, {})] })] }));
});
export default Header;
