import { css } from '@emotion/css';
import { colors } from '~shared/styles';
export const search = css `
	position: relative;
	width: 236px;
`;
export const input = (isLight) => css `
	width: 100%;
	height: 24px;
	padding-left: 32px;
	border: none;
	border-bottom: 1px solid ${isLight ? colors.black : colors.white};
	outline: none;
	font-size: 16px;
	background: transparent;

	&::placeholder {
		color: ${colors.nude};
	}
`;
export const searchIcon = css `
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;
