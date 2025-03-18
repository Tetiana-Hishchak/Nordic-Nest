import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { box, container, form, inputContainer, loginButton, } from './login.styles';
import Button from '~shared/components/button/button.component';
import { useNavigate } from 'react-router-dom';
import Input from '~shared/components/input/input.component';
import useAuthStore from '~shared/stores/auth.store';
export const LoginPage = () => {
    const [error, setError] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setTokens, setAuth } = useAuthStore();
    const navigate = useNavigate();
    // const loginMutation = useMutation({
    // 	mutationFn: ({ email, password }: LoginData) =>
    // 		AuthService.login(email, password),
    // 	onSuccess: (data) => {
    // 		if (data) {
    // 			setTokens(data.accessToken, data.refreshToken);
    // 			setAuth(true);
    // 			navigate(ROUTER_KEYS.PRODUCTS);
    // 		}
    // 	},
    // 	onError: (error) => {
    // 		console.error('Login failed:', error);
    // 		setError('Incorrect email or password');
    // 	},
    // });
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    // 	event.preventDefault();
    // 	try {
    // 		loginMutation.mutate({ email, password });
    // 	} catch (error: unknown) {
    // 		console.log(error);
    // 	}
    // };
    return (_jsx("div", { className: box, children: _jsx("div", { className: container, children: _jsxs("form", { className: form, children: [_jsxs("div", { className: inputContainer, children: [_jsx("label", { children: "Email" }), _jsx(Input, { type: "text", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("label", { children: "Password" }), _jsx(Input, { type: "password", value: password, onChange: (e) => setPassword(e.target.value), error: error ? error : '' })] }), _jsx(Button, { text: "Login", extraButtonStyles: loginButton })] }) }) }));
};
