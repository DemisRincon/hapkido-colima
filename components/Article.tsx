import React from "react";
import WrapperFadeOnView from "./WrapperFadeOnView";
import LetterBanner from "./LetterBanner";
import CardView from "./Card";
import { Pharagraph } from "./styled";
import styled from "styled-components";

export interface ArticleProps {
  name: string;
  image: string;
  content: string[];
  imagecircular: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 6rem 0;
`;

const Article: React.FC<ArticleProps> = ({
  name,
  content,
  image,
  imagecircular,
}) => {
  return (
    <Container>
      <LetterBanner title={name || ""} fontSize="h3" bgcolor="white" />
      <WrapperFadeOnView>
        {image && (
          <CardView
            image={image}
            $imagecircular={imagecircular}
            width={400}
            height={400}
          />
        )}
      </WrapperFadeOnView>
      {content?.map((paragraph, index) => (
        <WrapperFadeOnView key={index}>
          <Pharagraph>{paragraph}</Pharagraph>
        </WrapperFadeOnView>
      ))}
    </Container>
  );
};

export default Article;
