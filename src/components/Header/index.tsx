import { HeaderContainer, NavBarContainer } from "./styles";
import igniteLogo from "../../assets/ignite-logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

export const Header = () => {
  const { activeCycle } = useContext(CyclesContext);

  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" />

      <NavBarContainer>
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>

        {!activeCycle && (
          <NavLink to="/history" title="Histórico">
            <Scroll size={24} />
          </NavLink>
        )}
      </NavBarContainer>
    </HeaderContainer>
  );
};
