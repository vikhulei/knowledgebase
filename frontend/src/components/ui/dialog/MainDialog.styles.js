
import styled from "styled-components";
import { COLORS } from "../../../design/tokens/Colors";

export const DialogBox = styled.dialog`
  width: calc(100% - 40px);
  max-width: 440px;

  padding: 28px;
  margin: auto;

  background: ${COLORS.surface};
  border: none;
  border-radius: 12px;

  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const DialogTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;

  color: ${COLORS.textPrimary};
`;

export const DialogMessage = styled.p`
  margin-bottom: 28px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  color: ${COLORS.textMuted};
`;

export const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;
