"use client";
import { ReactNode } from "react";
import useViewportHeightTransitionPercentage from "@/library/hooks/useViewportHeightTransitionPercentage";
import logo from "@/library/images/logo.png";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import styled from "styled-components";

const Container = styled(motion.header)`
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
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.6) 40%,
    rgba(255, 255, 255, 0.4) 80%,
    rgba(255, 255, 255, 0.3) 90%,
    rgba(0, 0, 0, 0) 100%
  );
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -3;
`;

export const SolidBackground = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.black};
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

const StyledLink = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font: ${(props) => props.theme.fonts.fontAktivGroteskExtended};
`;

const StyledText = styled(motion.span)`
  color: ${(props) => props.theme.colors.white};
  font: ${(props) => props.theme.fonts.fontAktivGroteskExtended};
  font-weight: bold;
  font-size: 1.2rem;
`;

interface NavaLinkProps {
  href: string;
  children: ReactNode;
}

const NavaLink = ({ href, children }: NavaLinkProps) => (
  <StyledLink href={href}>{children}</StyledLink>
);

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [logoSrc] = useState(logo.src);
  const percentageTransition = useViewportHeightTransitionPercentage();
  const y = useTransform(scrollYProgress, [0, percentageTransition], [0, -4]);
  const opacity = useTransform(
    scrollYProgress,
    [0, percentageTransition],
    [0, 1]
  );

  const color = useTransform(
    scrollYProgress,
    [0, percentageTransition],
    ["#000", "white"]
  );

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <GradientEffect style={{ y }} />
      <SolidBackground style={{ opacity, y }} />
      {logoSrc && <Logo src={logoSrc} alt="logo" />}
      <Nav>
        <NavaLink href="/">
          <StyledText style={{ color }}>Home</StyledText>
        </NavaLink>
        <NavaLink href="/about">
          <StyledText style={{ color }}>Nosotros</StyledText>
        </NavaLink>
        <NavaLink href="/gallery">
          <StyledText style={{ color }}>Galeria</StyledText>
        </NavaLink>
        <NavaLink href="/location">
          <StyledText style={{ color }}>Ubicación</StyledText>
        </NavaLink>
        <NavaLink href="/contact">
          <StyledText style={{ color }}>Contacto</StyledText>
        </NavaLink>
      </Nav>
    </Container>
  );
};
export default Header;
