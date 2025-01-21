"use client";
import { ReactNode } from "react";
import useViewportHeightTransitionPercentage from "@/library/hooks/useViewportHeightTransitionPercentage";
import logo from "@/library/images/logo.png";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import WrapperFadeOnView from "./WrapperFadeOnView";
import { navData } from "@/library/data/navigator";

interface MainLayoutProps {
  children: ReactNode;
}

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

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

export const SolidBackground = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.lightBlue};
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
`;

const StyledText = styled(motion.span)`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.navLink};
  font-weight: bold;
  font-size: 1.2rem;
`;

const BottomContainer = styled.div`
  color: white;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface NavaLinkProps {
  href: string;
  children: ReactNode;
}

const NavaLink = ({ href, children }: NavaLinkProps) => (
  <StyledLink href={href}>{children}</StyledLink>
);

const Span = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.navLink};
  font-size: 1.2rem;
  margin: 1rem 0.5rem;
`;

const SideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const [logoSrc] = useState(logo.src);
  const percentageTransition = useViewportHeightTransitionPercentage();
  const y = useTransform(scrollYProgress, [0, percentageTransition], [0, -4]);
  const opacity = useTransform(
    scrollYProgress,
    [0, percentageTransition],
    [0, 1]
  );

  return (
    <Container>
      <HeaderContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <GradientEffect style={{ y }} />
        <SolidBackground style={{ opacity, y }} />
        {logoSrc && <Logo src={logoSrc} alt="logo" />}
        <Nav>
          {navData.links.map((link) => (
            <NavaLink key={link.href} href={link.href}>
              <StyledText>{link.label}</StyledText>
            </NavaLink>
          ))}
        </Nav>
      </HeaderContainer>
      {children}
      <BottomContainer>
        <WrapperFadeOnView>
          <FooterContainer>
            {navData.footerContent.content.map((content) => (
              <SideContainer>
                {content.data.map((item) => (
                  <ItemContainer>
                    {item.icon && <item.icon size={32} />}
                    {item.image && <Image src={item.image} />}
                    <Span key={item.text}>{item.text}</Span>
                  </ItemContainer>
                ))}
              </SideContainer>
            ))}

            <WrapperFadeOnView></WrapperFadeOnView>
          </FooterContainer>
        </WrapperFadeOnView>
        <p>{navData.footerContent.bottom}</p>
      </BottomContainer>
    </Container>
  );
};
export default MainLayout;
