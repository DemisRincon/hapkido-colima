"use client";
import { ReactNode } from "react";
import styled from "styled-components";
import HeaderContainer from "../Header/HeaderContainer";
import MenuContainer from "../MobileNav/MobileNavContainer";
import FooterContainer from "../Foooter/FooterContainer";

interface LayoutViewProps {
  children: ReactNode;
}

const LayoutView: React.FC<LayoutViewProps> = ({ children }) => {
  return (
    <Container>
      <HeaderContainer />
      <MenuContainer />
      {children}
      <FooterContainer />
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default LayoutView;
