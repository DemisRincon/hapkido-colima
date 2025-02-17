"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #1d72b8;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loading: React.FC = () => {
  return (
    <Container>
      <Spinner />
      <p>Loading...</p>
    </Container>
  );
};

export default Loading;
