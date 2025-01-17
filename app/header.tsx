"use client";
import { ReactNode } from "react";
import { breakpoints } from "@/library/GlobalStyles";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const NavigatorContainer = styled.div`
  display: none;
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
  }
`;

const Header = () => {
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "¿Quiénes somos?" },
    { href: "/location", label: "Ubicacón" },
    { href: "/gallery", label: "Galería" },
    { href: "/contact", label: "Contactanos" },
  ];
  return (
    <Container>
      <TitleContainer>
        <Title>Hapkido defensa personal</Title>
      </TitleContainer>
      <NavigatorContainer>
        {navigationLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </NavigatorContainer>
    </Container>
  );
};

export default Header;
