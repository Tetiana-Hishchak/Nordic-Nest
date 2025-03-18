import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useThemeStore } from '~shared/stores/theme.store';
import { input, search, searchIcon } from './searchbar.styles';
import SearchIcon from '~/assets/icon-search.svg';
import SeearchIconDark from '~/assets/icon-serch-dark.svg';
const SearchBar = () => {
    const isLight = useThemeStore((state) => state.isLight);
    return (_jsxs("div", { className: search, children: [_jsx("div", { className: searchIcon, children: isLight ? _jsx(SeearchIconDark, {}) : _jsx(SearchIcon, {}) }), _jsx("input", { type: "text", placeholder: "What can we help you find?", className: input(isLight) })] }));
};
export default SearchBar;
