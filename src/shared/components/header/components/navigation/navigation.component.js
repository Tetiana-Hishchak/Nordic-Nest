import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { button, navigation, navigationItem } from './navigation.styles';
import { useThemeStore } from '~shared/stores/theme.store';
import React from 'react';
const NAV_LINKS = [
    { path: '/shop', label: 'Shop', isModal: true },
    { path: '/about-us', label: 'About Us' },
    { path: '/find-us', label: 'Find Us' },
];
const Navigation = React.memo(({ onShopClick, isModalOpen }) => {
    const isLight = useThemeStore((state) => state.isLight);
    const setIsLight = useThemeStore((state) => state.setIsLight);
    React.useEffect(() => {
        if (isModalOpen) {
            setIsLight(true);
        }
    }, [isModalOpen, setIsLight]);
    return (_jsx("ul", { className: navigation, children: NAV_LINKS.map(({ path, label, isModal }) => (_jsx("li", { className: navigationItem(isLight), children: isModal ? (_jsx("button", { className: button(isLight), onClick: onShopClick, children: label })) : (_jsx(Link, { to: path, children: label })) }, path))) }));
});
export default Navigation;
