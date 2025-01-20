"use client";
import WrapperFadeOnView from "@/components/WrapperFadeOnView";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Iframe = styled.iframe`
  border: none;
  overflow: hidden;
`;

const Facebook = () => {
  return (
    <WrapperFadeOnView threshold={0.3}>
      <Container>
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

export default Facebook;
