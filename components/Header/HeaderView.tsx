import { motion, MotionValue } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { NavLink } from "../cells/styled";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderViewProps {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  logo: string;
  nav: { link: string; name: string }[];
  toggleNav: () => void;
}

const HeaderView: React.FC<HeaderViewProps> = ({
  y,
  opacity,
  logo,
  nav,
  toggleNav,
}) => {
  return (
    <HeaderContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <GradientEffect style={{ y }} />
      <SolidBackground style={{ opacity, y }} />
      {logo && <Logo src={logo} alt="logo" />}
      <Nav>
        {nav.map((item) => (
          <NavLink key={item.link} href={item.link}>
            <StyledText>{item.name}</StyledText>
          </NavLink>
        ))}
      </Nav>
      <MenuIconContainer onClick={toggleNav}>
        <GiHamburgerMenu
          size={32}
          color="white"
          style={{ display: "block", cursor: "pointer" }}
        />
      </MenuIconContainer>
    </HeaderContainer>
  );
};

export default HeaderView;

const HeaderContainer = styled(motion.header)`
  left: 0;
  position: fixed;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 120px;
  }
`;

export const GradientEffect = styled(motion.div)`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 0, 0, 0.3) 80%,
    rgba(0, 0, 0, 0) 100%
  );
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -3;
`;

const SolidBackground = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.noSoBlack};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -2;
`;

const Logo = styled.img`
  height: 90%;
  width: auto;
`;

const Nav = styled.nav`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledText = styled(motion.span)`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.navLink};
  font-weight: bold;
  font-size: 1.2rem;
`;

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;
