import React from "react";
import styled from "styled-components";
import Card from "../cells/Card";
import WrapperFadeOnView from "../WrapperFadeOnView";
import LetterBanner from "../cells/LetterBanner";

export interface GridProps {
  title?: string;
  images: string[];
  rows?: string;
  columns?: string;
  photoheight?: string;
  photowidth?: string;
}

const GridContainer = styled.div<{ rows?: string; columns?: string }>`
  display: grid;
  grid-template-rows: ${(props) => props.rows || "1fr"};
  grid-template-columns: ${(props) => props.columns || "1fr 1fr"};
  gap: 10px;
  max-width: 80%;
`;

const GridItem = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 20px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 6rem 0;
`;

const Grid: React.FC<GridProps> = ({
  title = "",
  images,
  rows,
  columns,
  photoheight,
  photowidth,
}) => {
  return (
    <Container>
      <WrapperFadeOnView>
        <LetterBanner title={title} fontSize="h3" bgcolor="white" />
      </WrapperFadeOnView>
      <GridContainer rows={rows} columns={columns}>
        {images.map((image, index) => (
          <WrapperFadeOnView key={index}>
            <GridItem>
              <Card image={image} height={photoheight} width={photowidth} />
            </GridItem>
          </WrapperFadeOnView>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Grid;
