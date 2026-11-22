
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  LuHouse,
  LuHeadset,
  LuServer,
  LuWrench,
  LuMail,
  LuTerminal,
  LuGraduationCap,
  LuShieldCheck,
  LuBookmark,
  LuStar,
  LuSettings,
  LuChevronDown,
  LuChevronRight,
} from "react-icons/lu";

import Logo from "./assets/logo.png";
import { navigation } from "./navigation/navigation";

import {
  SidebarOuter,
  SidebarLogo,
  LogoImage,
  Navigation,
  NavItem,
  NavIcon,
  NavLabel,
  ExpandButton,
  SubNav,
  SubNavItem,
  SidebarBottom,
  Divider,
} from "./Sidebar.styles";

const icons = {
  headset: LuHeadset,
  server: LuServer,
  wrench: LuWrench,
  mail: LuMail,
  terminal: LuTerminal,
  "graduation-cap": LuGraduationCap,
  "shield-check": LuShieldCheck,
  bookmark: LuBookmark,
};

const createSlug = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const Sidebar = () => {
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const toggleCategory = (label) => {
    setExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <SidebarOuter>

      {/* <SidebarLogo>
        <NavLink to="/">
          <LogoImage src={Logo} alt="IT Knowledge Base" />
        </NavLink>
      </SidebarLogo> */}

      <Navigation>

        <NavItem as={NavLink} to="/" end>
          <NavIcon><LuHouse size={19} /></NavIcon>
          <NavLabel>Home</NavLabel>
        </NavItem>

        {navigation.map((category) => {
          const Icon = icons[category.icon];
          const categorySlug = createSlug(category.label);
          const isExpanded = expanded[category.label];

          return (
            <div key={category.label}>

              <NavItem
                   onClick={() => toggleCategory(category.label)}
                  aria-label={`Toggle ${category.label}`}
                  aria-expanded={!!isExpanded}             
              >
                <NavIcon>
                  {Icon && <Icon size={19} />}
                </NavIcon>

                <NavLabel
                  onClick={() => {
                    navigate(`/categories/${categorySlug}`)
                  }
                  }
                >
                  {category.label}
                </NavLabel>

                <ExpandButton
                  type="button"
                //   onClick={() => toggleCategory(category.label)}
                //   aria-label={`Toggle ${category.label}`}
                //   aria-expanded={!!isExpanded}
                >
                  {isExpanded
                    ? <LuChevronDown size={17} />
                    : <LuChevronRight size={17} />}
                </ExpandButton>
              </NavItem>

              {isExpanded && (
                <SubNav>
                  {category.children.map((subcategory) => (
                    <SubNavItem
                      key={subcategory}
                      as={NavLink}
                      to={`/categories/${categorySlug}/${createSlug(subcategory)}`}
                    >
                      {subcategory}
                    </SubNavItem>
                  ))}
                </SubNav>
              )}

            </div>
          );
        })}

      </Navigation>

      <SidebarBottom>
        <Divider />

        <NavItem as={NavLink} to="/favourites">
          <NavIcon><LuStar size={19} /></NavIcon>
          <NavLabel>Favourites</NavLabel>
        </NavItem>

        <NavItem as={NavLink} to="/admin">
          <NavIcon><LuSettings size={19} /></NavIcon>
          <NavLabel>Admin</NavLabel>
        </NavItem>
      </SidebarBottom>

    </SidebarOuter>
  );
};

export default Sidebar;
