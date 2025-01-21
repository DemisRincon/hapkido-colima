"use client";
import WrapperFadeOnView from "@/components/WrapperFadeOnView";
import styled from "styled-components";
import { H4 } from "../cells/styled";

export interface FacebookProps {
  title: string;
}

const Facebook: React.FC<FacebookProps> = ({ title }) => {
  return (
    <WrapperFadeOnView threshold={0.3}>
      <Container>
        <H4>{title}</H4>
        <Iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHapkidoColima&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=966124578767233"
          width="340"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></Iframe>
      </Container>
    </WrapperFadeOnView>
  );
};

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

export default Facebook;
