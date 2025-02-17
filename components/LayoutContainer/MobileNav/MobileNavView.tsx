import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../../styled";
import { CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";

interface MobileNavProps {
  isMobileNavOpen: boolean;
  toggleMobileNav: () => void;
  nav: {
    link: string;
    name: string;
  }[];
}

const MobileNav: React.FC<MobileNavProps> = ({
  isMobileNavOpen,
  toggleMobileNav,
  nav,
}) => {
  return (
    <AnimatePresence>
      {isMobileNavOpen && (
        <NavContainer
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
        >
          <CloseButton onClick={toggleMobileNav}>
            <CgClose size={32} />
          </CloseButton>
          <NavList onClick={toggleMobileNav}>
            {nav.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={item.link}>{item.name}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavContainer>
      )}
    </AnimatePresence>
  );
};

const NavContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.noSoBlack};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 20px 0;
`;

export default MobileNav;
