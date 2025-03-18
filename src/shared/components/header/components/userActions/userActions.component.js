import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { box } from './userActions.styles';
import { Link } from 'react-router-dom';
import FavIconLight from '~/assets/icon-heart.svg';
import FavIconDark from '~/assets/icon-heart-dark.svg';
import LogIconLight from '~/assets/icon-login.svg';
import LogIconDark from '~/assets/icon-login-dark.svg';
import CartIconLight from '~/assets/icon-cart.svg';
import CartIconDark from '~/assets/icon-cart-dark.svg';
import { useThemeStore } from '~shared/stores/theme.store';
const UserActions = () => {
    const isLight = useThemeStore((state) => state.isLight);
    return (_jsxs("div", { className: box, children: [_jsx(Link, { to: '/favourites', children: isLight ? _jsx(FavIconDark, {}) : _jsx(FavIconLight, {}) }), _jsx(Link, { to: '/login', children: isLight ? _jsx(LogIconDark, {}) : _jsx(LogIconLight, {}) }), _jsx(Link, { to: '/cart', children: isLight ? _jsx(CartIconDark, {}) : _jsx(CartIconLight, {}) })] }));
};
export default UserActions;
