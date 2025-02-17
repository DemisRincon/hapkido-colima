"use client";

import React from "react";
import styled from "styled-components";
import LetterBanner from "./LetterBanner";
import WrapperFadeOnView from "./WrapperFadeOnView";
import Icon from "./Icon";

export interface ContactProps {
  title: string;
  buttons: { url: string; name: string; icon?: string }[];
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
  width: 18rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.navLink};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border: 0.1rem solid ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsScreen: React.FC<ContactProps> = ({ title, buttons }) => {
  return (
    <Container>
      <LetterBanner title={title} fontSize="h3" bgcolor="white" />
      {buttons.map(({ url, name, icon }) => (
        <WrapperFadeOnView key={name}>
          <StyledLink href={url} target="_blank" rel="noopener noreferrer">
            {icon && <Icon iconName={icon} style={{ margin: "0 10px" }} />}{" "}
            {name}
          </StyledLink>
        </WrapperFadeOnView>
      ))}
    </Container>
  );
};

export default ButtonsScreen;
