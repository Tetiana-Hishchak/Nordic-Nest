import { jsx as _jsx } from "react/jsx-runtime";
import { privateRoutes, publicRoutes } from './routes';
export const MainRouter = () => {
    const auth = false;
    return _jsx("div", { children: auth ? privateRoutes : publicRoutes });
};
