"use client";
import { ReactNode, Suspense } from "react";
import styled from "styled-components";
import HeaderContainer from "./Header/HeaderContainer";
import MenuContainer from "./MobileNav/MobileNavContainer";
import FooterContainer from "./Foooter/FooterContainer";
import useGetNavigation from "@/lib/hooks/useGetNav";

interface LayoutViewProps {
  children: ReactNode;
}
const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const LayoutView: React.FC<LayoutViewProps> = ({ children }) => {
  useGetNavigation();
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderContainer />
        <MenuContainer />
        <InnerContainer>{children}</InnerContainer>
        <FooterContainer />
      </Suspense>
    </Container>
  );
};

export default LayoutView;
