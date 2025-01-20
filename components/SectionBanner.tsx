import React from "react";
import styled from "styled-components";

interface SectionBannerProps {
  title: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.colors.grey};
`;

const SectionBanner: React.FC<SectionBannerProps> = ({ title }) => {
  return (
    <Container>
      <h4>{title}</h4>
    </Container>
  );
};

export default SectionBanner;
