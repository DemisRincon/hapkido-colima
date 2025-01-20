"use client";

import styled from "styled-components";

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
