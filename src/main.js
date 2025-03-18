import { jsx as _jsx } from "react/jsx-runtime";
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './shared/styles/global-styles.css';
import App from '~modules/app/app.module';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
});
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(QueryClientProvider, { client: queryClient, children: _jsx(BrowserRouter, { children: _jsx("div", { className: "custom-root", children: _jsx(App, {}) }) }) }));
