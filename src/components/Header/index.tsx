import { HeaderContainer, NavBarContainer } from "./styles";
import igniteLogo from "../../assets/ignite-logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" />

      <NavBarContainer>
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </NavBarContainer>
    </HeaderContainer>
  );
};
