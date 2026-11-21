import styled, { css } from "styled-components";
import { COLORS } from "../../../design/tokens/Colors";

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;

  background: ${COLORS.surface};
  color: ${COLORS.textPrimary};

  border: 1px solid ${COLORS.border};
  border-radius: 8px;

  font-size: 14px;
  line-height: 1.5;

  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${COLORS.textMuted};
  }

  &:hover:not(:disabled) {
    border-color: ${COLORS.secondary};
  }

  &:focus {
    outline: none;
    border-color: ${COLORS.primary};
    box-shadow: 0 0 0 3px rgba(75, 110, 138, 0.15);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: #B54747;

      &:focus {
        border-color: #B54747;
        box-shadow: 0 0 0 3px rgba(181, 71, 71, 0.15);
      }
    `}
`;