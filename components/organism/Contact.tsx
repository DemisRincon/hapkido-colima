"use client";
import React from "react";
import styled from "styled-components";
import LetterBanner from "../cells/LetterBanner";
import WrapperFadeOnView from "../WrapperFadeOnView";
import { IconType } from "react-icons";

export interface ContactProps {
  title: string;
  urls: { url: string; name: string; icon?: IconType }[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  margin: 3rem;
  padding: 1rem 2rem;
  min-width: 8rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.navLink};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border: 0.1rem solid ${({ theme }) => theme.colors.darkBlue};
`;

const Contact: React.FC<ContactProps> = ({ title, urls }) => {
  return (
    <Container>
      <LetterBanner title={title} fontSize="h3" bgcolor="white" />
      {urls.map(({ url, name, icon: Icon }) => (
        <WrapperFadeOnView key={name}>
          <StyledLink href={url} target="_blank" rel="noopener noreferrer">
            {Icon && <Icon />} {name}
          </StyledLink>
        </WrapperFadeOnView>
      ))}
    </Container>
  );
};

export default Contact;
