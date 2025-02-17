"use client";
import WrapperFadeOnView from "@/components/WrapperFadeOnView";
import styled from "styled-components";
import { H4 } from "./styled";

export interface FacebookProps {
  title: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  padding: 6rem 0;
`;

const Iframe = styled.iframe`
  border: none;
  overflow: hidden;
  margin-top: 2rem;
`;

const Facebook: React.FC<FacebookProps> = ({ title }) => {
  return (
    <WrapperFadeOnView threshold={0.3}>
      <Container>
        <H4>{title}</H4>
        <Iframe
          src={process.env.NEXT_PUBLIC_FB}
          width="340"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></Iframe>
      </Container>
    </WrapperFadeOnView>
  );
};

export default Facebook;
