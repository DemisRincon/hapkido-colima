"use client";
import WrapperFadeOnView from "@/components/WrapperFadeOnView";
import hap9 from "@/library/images/hap9.jpg";
import { motion } from "framer-motion";
import styled from "styled-components";

interface ContainerProps {
  $image: string;
}

const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.$image});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 40%;
  background-size: cover;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    background-position: 0%;
  }
`;

const BlurrScreen = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const H1 = styled(motion.h1)`
  color: white;
  margin: 0;
  line-height: ${({ theme }) => theme.fontSizes.h1};
  max-width: 100vw;
`;

const visible = { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const Home = () => {
  return (
    <WrapperFadeOnView>
      <Container $image={hap9.src}>
        <BlurrScreen
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.6 } } }}
        >
          <Content>
            <H1 variants={itemVariants}>
              <strong>Hapkido</strong>
            </H1>
            <H1 variants={itemVariants}>
              <strong>Colima</strong>
            </H1>
          </Content>
        </BlurrScreen>
      </Container>
    </WrapperFadeOnView>
  );
};

export default Home;
