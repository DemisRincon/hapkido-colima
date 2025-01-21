"use client";
import styled from "styled-components";
import { Separator } from "./cells/styled";

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
  max-width: 90%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 800px;
  }
`;

const H4 = styled.h4`
  max-width: 80%;
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
      {title && <H4>{title}</H4>}
      {contentResolved}
      <Separator />
    </Container>
  );
};

export default SectionBanner;
