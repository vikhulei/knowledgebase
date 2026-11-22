import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../design/tokens/Colors";

export const SidebarOuter = styled.aside`
  width: 292px;
  min-width: 292px;
    height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  background: #111F27;
  color: ${COLORS.textLight};

  overflow-y: auto;
scrollbar-width: none; /* Firefox */
-ms-overflow-style: none; /* Older Edge/IE */

&::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

`;

export const SidebarLogo = styled.div`
  padding: 4px 12px 24px;
`;

export const LogoImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const NavItem = styled.div`
  min-height: 46px;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 12px;

  border-radius: 8px;
  color: ${COLORS.textLight};
  text-decoration: none;

  font-size: 14px;
  font-weight: 500;

  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  &.active {
    background: ${COLORS.primary};
    color: ${COLORS.textLight};
  }
`;

export const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  flex-shrink: 0;

  color: ${COLORS.secondary};
`;

export const NavLabel = styled.span`
  flex: 1;
  cursor: pointer;
`;

export const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px;

  background: transparent;
  border: none;
  color: ${COLORS.secondary};

  cursor: pointer;

  &:hover {
    color: ${COLORS.textLight};
  }
`;

export const SubNav = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4px 0 10px 44px;
  gap: 2px;
`;

export const SubNavItem = styled(NavLink)`
  display: block;
  padding: 10px 8px;

  color: #B8C6CC;
  text-decoration: none;
  font-size: 13px;

  border-radius: 6px;

  &:hover {
    color: ${COLORS.textLight};
    background: rgba(255, 255, 255, 0.06);
  }

  &.active {
    color: ${COLORS.secondary};
    font-weight: 600;
  }
`;

export const SidebarBottom = styled.div`
  margin-top: auto;
  padding-top: 16px;
`;

export const Divider = styled.div`
  height: 1px;
  margin: 0 8px 12px;

  background: rgba(255, 255, 255, 0.12);
`;
