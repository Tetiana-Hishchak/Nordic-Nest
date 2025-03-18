import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUsPage from '~modules/abouts- us/page/abouts-us.page';
import AI from '~modules/ai/ai.page';
import { LoginPage } from '~modules/auth/pages';
import FindUsPage from '~modules/find/page/find-us.page';
import { HomePage } from '~modules/home/pages/home.page';
export const publicRoutes = (_jsxs(Routes, { children: [_jsx(Route, { path: "/" /* ROUTER_KEYS.HOME */, element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about-us" /* ROUTER_KEYS.ABOUT_US */, element: _jsx(AboutUsPage, {}) }), _jsx(Route, { path: "/find-us" /* ROUTER_KEYS.FIND_US */, element: _jsx(FindUsPage, {}) }), _jsx(Route, { path: "/ai" /* ROUTER_KEYS.AI */, element: _jsx(AI, {}) }), _jsx(Route, { path: "/login" /* ROUTER_KEYS.LOGIN */, element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/*" /* ROUTER_KEYS.ALL_MATCH */, element: _jsx(Navigate, { to: "/" /* ROUTER_KEYS.HOME */ }) })] }));
export const privateRoutes = (_jsx(Routes, { children: _jsx(Route, { path: "/*" /* ROUTER_KEYS.ALL_MATCH */, element: _jsx(Navigate, { to: "/" /* ROUTER_KEYS.HOME */ }) }) }));
