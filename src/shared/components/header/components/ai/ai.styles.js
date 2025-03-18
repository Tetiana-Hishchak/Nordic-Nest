import { css } from '@emotion/css';
import { colors } from '~shared/styles';
export const box = (isLight) => css `
	display: flex;
	align-items: center;
	gap: 12px;


	p {
		color: ${isLight ? colors.black : colors.white};
	}
`;
