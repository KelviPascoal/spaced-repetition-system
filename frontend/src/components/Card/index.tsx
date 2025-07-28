import styled, { css } from 'styled-components';

export const Card = styled.div`
${({ theme }) => css`
  background-color: ${theme.colors.background.base};
  padding: ${typeof theme.spacings.small === 'number'
      ? `${theme.spacings.small * 4}px`
      : theme.spacings.small};
  border-radius: ${typeof theme.border.radius === 'number'
      ? `${theme.border.radius}px`
      : theme.border.radius};
  transition: ${`box-shadow ${theme.transition.default}`};
  cursor: pointer;
  `}
`;
