
import { LuBell, LuChevronDown, LuUserRound } from "react-icons/lu";

import { NavLink } from "react-router-dom";

import {
  HeaderOuter,
  HeaderActions,
  HeaderLogo,
  LogoImage,
  NotificationButton,
  NotificationDot,
  UserButton,
  UserAvatar,
  UserName,
} from "./Header.styles";

import Logo from "./assets/logo.png"

const Header = () => {
  return (
    <HeaderOuter>

      <HeaderLogo>
        <NavLink to="/">
          <LogoImage src={Logo} alt="IT Knowledge Base" />
        </NavLink>
      </HeaderLogo>

      <HeaderActions>
        <NotificationButton
          type="button"
          aria-label="Notifications"
        >
          <LuBell size={23} />
          <NotificationDot />
        </NotificationButton>

        <UserButton type="button">
          <UserAvatar>
            <LuUserRound size={20} />
          </UserAvatar>

          <UserName>Test User</UserName>

          <LuChevronDown size={18} />
        </UserButton>

      </HeaderActions>
    </HeaderOuter>
  );
};

export default Header;
