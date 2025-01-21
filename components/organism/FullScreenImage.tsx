import WrapperFadeOnView from "../WrapperFadeOnView";
import styled from "styled-components";
import { motion } from "framer-motion";
import { H1, Strong } from "../cells/styled";

export interface FullScreenImageProps {
  images: string[];
  content: string[];
}

interface ContainerProps {
  $image: string;
}

const ContainerBackgroundImage = styled.div<ContainerProps>`
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
const visible = { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const StyledH1 = styled(H1)`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.h1};
  }
`;

const FullScreenImage: React.FC<FullScreenImageProps> = ({
  images,
  content,
}) => {
  return (
    <WrapperFadeOnView>
      <ContainerBackgroundImage $image={images[0]}>
        <BlurrScreen
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.6 } } }}
        >
          <Content>
            {content.map((t) => (
              <StyledH1 key={t} variants={itemVariants}>
                <Strong color="white">{t}</Strong>
              </StyledH1>
            ))}
          </Content>
        </BlurrScreen>
      </ContainerBackgroundImage>
    </WrapperFadeOnView>
  );
};

export default FullScreenImage;
