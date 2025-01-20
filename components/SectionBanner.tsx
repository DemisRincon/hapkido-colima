"use client";
import React from "react";
import styled from "styled-components";
import { Separator } from "./styled";

interface SectionBannerProps {
  title?: string;
  content?: string | string[];
  color?: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 10%;
  height: auto;
  background-color: ${({ theme, color = "grey" }) => theme.colors[color]};
`;

const Pharagraph = styled.p`
  max-width: 800px;
`;

const SectionBanner: React.FC<SectionBannerProps> = ({
  title,
  content,
  color,
}) => {
  const contentResolved = Array.isArray(content) ? (
    content.map((item, index) => {
      return <Pharagraph key={index}>{item}</Pharagraph>;
    })
  ) : (
    <Pharagraph>{content}</Pharagraph>
  );

  return (
    <Container color={color}>
      <Separator />
      {title && <h4>{title}</h4>}
      {contentResolved}
      <Separator />
    </Container>
  );
};

export default SectionBanner;
