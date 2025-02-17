"use client";
import { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin: 0;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const StyledLink = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFound: FC = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Page Not Found</Message>
      <Link href="/" passHref>
        <StyledLink>Go back to Home</StyledLink>
      </Link>
    </Container>
  );
};

export default NotFound;
