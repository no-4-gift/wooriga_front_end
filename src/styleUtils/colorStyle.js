import { css } from "styled-components";

export const colorSelector = css`
  ${({ theme, color }) => {
    const selected = theme.familyColor[color];
    return css`
      background: ${selected};
    `;
  }}
`;

export const profileColor = css`
  ${({ theme, color }) => {
    const radiusColor = theme.familyColor[color];
    return css`
      border: 2px solid ${radiusColor};
    `;
  }}
`;
