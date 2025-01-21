"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

//H///
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
  line-height: ${({ theme }) => theme.fontSizes.h3};
  max-width: 80%;
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

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid red;
`;

export const Separator = styled.div`
  width: 100%;
  height: 0;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 100px;
  }
`;
