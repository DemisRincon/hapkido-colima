"use client";
import styled from "styled-components";
import WrapperFadeOnView from "../WrapperFadeOnView";
import { H3 } from "../cells/styled";

export interface SectionBannerProps {
  title?: string;
  content?: string[];
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

  height: auto;
  background-color: ${({ theme, bgColor = "grey" }) => theme.colors[bgColor]};
`;

const Pharagraph = styled.p`
  max-width: 90%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 800px;
  }
`;

const SectionBanner: React.FC<SectionBannerProps> = ({
  title,
  content = [],
  bgColor,
}) => {
  return (
    <WrapperFadeOnView>
      <Container bgColor={bgColor}>
        {title && <H3>{title}</H3>}
        {content.map((item, index) => (
          <Pharagraph key={index}>{item}</Pharagraph>
        ))}
      </Container>
    </WrapperFadeOnView>
  );
};

export default SectionBanner;
