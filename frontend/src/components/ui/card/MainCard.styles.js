import styled, { css } from "styled-components";
import { COLORS } from "../../../design/tokens/Colors";

const variants = {
  default: css`
    background: ${COLORS.surface};
    border: 1px solid ${COLORS.border};
  `,

  interactive: css`
    background: ${COLORS.surface};
    border: 1px solid ${COLORS.border};
    cursor: pointer;

    &:hover {
      border-color: ${COLORS.primary};
      box-shadow: 0 4px 12px rgba(29, 39, 45, 0.1);
      transform: translateY(-2px);
    }
  `,

  outlined: css`
    background: transparent;
    border: 1px solid ${COLORS.primary};
  `,
};

export const Card = styled.div`
  padding: 24px;
  border-radius: 12px;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  ${({ $variant = "default" }) => variants[$variant]}
`;