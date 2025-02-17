"use client";
import styled from "styled-components";
import WrapperFadeOnView from "./WrapperFadeOnView";
import { H4, Pharagraph } from "./styled";

export interface SectionBannerProps {
  name: string;
  content: string[];
  bgcolor?: string;
  padding?: string;
}

interface ContainerProps {
  $bgcolor?: string;
  padding?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: ${({ padding }) => padding ?? "6rem 0"};
  height: auto;
  background-color: ${({ theme, $bgcolor = "grey" }) => theme.colors[$bgcolor]};
`;

const SectionBanner: React.FC<SectionBannerProps> = ({
  name,
  content = [],
  bgcolor,
  padding,
}) => {
  return (
    <WrapperFadeOnView>
      <Container $bgcolor={bgcolor} padding={padding}>
        <H4>{name}</H4>
        {content &&
          content?.map((item, index) => (
            <Pharagraph key={index}>{item}</Pharagraph>
          ))}
      </Container>
    </WrapperFadeOnView>
  );
};

export default SectionBanner;
