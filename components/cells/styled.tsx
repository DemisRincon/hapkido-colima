"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
//////////////////////////////LINK///////////////////////////////
interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <StyledLink href={href}>{children}</StyledLink>
);

const StyledLink = styled(Link)`
  margin: 0 15px;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
`;

///////////////////////////////H///////////////////////////////

export const H1 = styled(motion.h1)`
  color: ${({ theme, color = "black" }) => theme.colors[color]};
  margin: 0;
  line-height: ${({ theme }) => theme.fontSizes.h1};
  max-width: 80%;
`;

export const H2 = styled(motion.h2)`
  margin: 0;
  line-height: ${({ theme }) => theme.fontSizes.h2};
  max-width: 80%;
`;

export const H3 = styled(motion.h3)`
  margin: 0;
  max-width: 80%;
  line-height: ${({ theme }) => theme.fontSizes.h3};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
`;

export const H4 = styled(motion.h4)`
  max-width: 80%;
`;

export const Strong = styled.strong`
  color: ${({ theme, color }) => (color ? theme.colors[color] : "transparent")};
  @supports (-webkit-text-stroke: 1px ${({ theme }) => theme.colors.black}) {
    -webkit-text-fill-color: ${({ theme, color }) =>
      color ? theme.colors[color] : "transparent"};
    -webkit-text-stroke: 3px ${({ theme }) => theme.colors.black};
  }
`;

///////////////////////////////PARAGRAPH///////////////////////////////

export const Pharagraph = styled.p`
  max-width: 90%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 60%;
  }
`;
