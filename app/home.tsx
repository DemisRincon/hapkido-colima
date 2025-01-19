"use client";
import hap9 from "@/library/images/hap9.jpg";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  $image: string;
}

const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.$image});
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: 0%;
  background-size: cover;
`;

const BlurrScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <Container $image={hap9.src}>
      <BlurrScreen>
        <Content>HELLO</Content>
      </BlurrScreen>
    </Container>
  );
};

export default Home;
