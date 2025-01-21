import React from "react";
import WrapperFadeOnView from "../WrapperFadeOnView";
import LetterBanner from "../cells/LetterBanner";
import Card from "../cells/Card";
import { Pharagraph } from "../cells/styled";
import styled from "styled-components";

export interface ArticleProps {
  title?: string;
  images?: string[];
  content?: string[];
  $imagecircular?: boolean;
  imagewidth?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 6rem 0;
`;

const Article: React.FC<ArticleProps> = ({
  title,
  content = [],
  images = [],
  $imagecircular,
  imagewidth,
}) => {
  return (
    <Container>
      <LetterBanner title={title || ""} fontSize="h3" bgcolor="white" />

      <WrapperFadeOnView>
        <Card
          image={images[0]}
          $imagecircular={$imagecircular}
          width={imagewidth}
        />
      </WrapperFadeOnView>
      {content.map((paragraph, index) => (
        <WrapperFadeOnView key={index}>
          <Pharagraph>{paragraph}</Pharagraph>
        </WrapperFadeOnView>
      ))}
    </Container>
  );
};

export default Article;
