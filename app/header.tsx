"use client";
import logo from "@/library/images/logo.png";
import Link from "next/link";
import { useState } from "react";

import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background-color: #242b35;
`;

const Logo = styled.img`
  height: 90%;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

const NavaLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font: ${(props) => props.theme.fonts.fontAktivGroteskExtended};
`;

const Header = () => {
  const [logoSrc] = useState(logo.src);

  return (
    <Container suppressHydrationWarning>
      {logoSrc && <Logo src={logoSrc} alt="logo" />}
      <Nav>
        <NavaLink href="/">Home</NavaLink>
        <NavaLink href="/about">About</NavaLink>
        <NavaLink href="/projects">Projects</NavaLink>
        <NavaLink href="/contact">Contact</NavaLink>
      </Nav>
    </Container>
  );
};
export default Header;
