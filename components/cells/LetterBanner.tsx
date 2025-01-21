"use client";
import styled from "styled-components";
import WrapperFadeOnView from "../WrapperFadeOnView";
import { H1, H2, H3, H4 } from "./styled";

export interface LetterBannerProps {
  title: string;
  fontSize?: string;
  bgColor?: string;
}

interface ContainerProps {
  bgColor?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 6rem 0;
  height: auto;
  background-color: ${({ theme, bgColor = "grey" }) => theme.colors[bgColor]};
`;

const LetterBanner: React.FC<LetterBannerProps> = ({
  title,
  bgColor,
  fontSize,
}) => {
  const Title = () => {
    switch (fontSize) {
      case "h1":
        return <H1>{title}</H1>;
      case "h2":
        return <H2>{title}</H2>;
      case "h3":
        return <H3>{title}</H3>;
      case "h4":
        return <H4>{title}</H4>;
      default:
        return <H1>{title}</H1>;
    }
  };

  return (
    <WrapperFadeOnView>
      <Container bgColor={bgColor}>
        <Title />
      </Container>
    </WrapperFadeOnView>
  );
};

export default LetterBanner;
