
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

import { navigation } from "./navigation/navigation";

import {
  SidebarOuter,
  Navigation,
  NavItem,
  NavIcon,
  NavLabel,
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
  graduationCap: LuGraduationCap,
  shieldCheck: LuShieldCheck,
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
                  as="button"
                  type="button"
                  onClick={() => toggleCategory(category.label)}
                  aria-label={`Toggle ${category.label}`}
                  aria-expanded={!!isExpanded}             
              >
                <NavIcon>
                  {Icon && <Icon size={19} />}
                </NavIcon>

                <NavLabel
                
                  onClick={() => {
                    e.stopPropagation();
                    navigate(`/categories/${categorySlug}`)
                  }
                  }
                >
                  {category.label}
                </NavLabel>

                {/* <ExpandButton
                  type="button"
                  onClick={() => toggleCategory(category.label)}
                  aria-label={`Toggle ${category.label}`}
                  aria-expanded={!!isExpanded}
                > */}
                  {isExpanded
                    ? <LuChevronDown size={17} />
                    : <LuChevronRight size={17} />}
                {/* </ExpandButton> */}
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
