"use client";
import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1000;
  overflow: hidden;
`;

const Spinner = styled.div`
  border: 16px solid ${({ theme }) => theme.colors.grey};
  border-top: 16px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spinnerAnimation} 2s linear infinite;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 120px;
    height: 120px;
  }
`;

const LoadingText = styled.h1`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.darkBlue}; /* #2A3659 */
  letter-spacing: 0.5rem;
`;

const LoadingComponent = () => {
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <SpinnerContainer {...containerAnimation} data-testid="spinner">
      <Spinner data-testid="spinner" />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
};

export default LoadingComponent;
