
import styled from "styled-components";
import { COLORS } from "../../../design/tokens/Colors";

export const HeaderOuter = styled.header.withConfig({
  displayName: "HeaderOuter",
})`
  position: relative;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: ${COLORS.dark};
  color: ${COLORS.textLight};
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const HeaderLogo = styled.div`
  position: relative;
  height: 100%;
  padding: 6px;
`;

export const LogoImage = styled.img`
  height: 100%;
`;



export const NotificationButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  background: transparent;
  border: none;
  color: inherit;

  cursor: pointer;

  &:hover {
    color: ${COLORS.secondary};
  }
`;

export const NotificationDot = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;

  width: 9px;
  height: 9px;

  background: ${COLORS.secondary};
  border-radius: 50%;
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 4px 0;

  background: transparent;
  border: none;
  color: inherit;

  cursor: pointer;

  &:hover {
    color: ${COLORS.secondary};
  }
`;

export const UserAvatar = styled.span`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${COLORS.textMuted};
  border-radius: 50%;

  color: ${COLORS.textLight};
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`;
