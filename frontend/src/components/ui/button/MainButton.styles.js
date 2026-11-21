import styled, { css } from "styled-components";
import { COLORS } from "../../../design/tokens/Colors";

const variants = {
  primary: css`
    background: ${COLORS.primary};
    color: ${COLORS.textLight};

    &:hover:not(:disabled) {
      background: ${COLORS.primaryHover};
    }
  `,

  secondary: css`
    background: ${COLORS.accent};
    color: ${COLORS.textPrimary};

    &:hover:not(:disabled) {
      background: ${COLORS.secondary};
    }
  `,

  outline: css`
    background: transparent;
    color: ${COLORS.primary};
    border: 1px solid ${COLORS.primary};

    &:hover:not(:disabled) {
      background: ${COLORS.accent};
    }
  `,

  danger: css`
    background: #B54747;
    color: #FFFFFF;

    &:hover:not(:disabled) {
      background: #963939;
    }
  `,
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 24px;
  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  cursor: pointer;
  transition: background 0.2s ease;

  ${({ $variant = "primary" }) => variants[$variant] || variants.primary}

  &:focus-visible {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:active {
    transform: translate(1px, 1px);
  } 
`;