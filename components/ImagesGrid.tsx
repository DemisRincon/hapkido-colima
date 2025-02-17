import React from "react";
import styled from "styled-components";
import Card from "./Card";
import WrapperFadeOnView from "./WrapperFadeOnView";
import LetterBanner from "./LetterBanner";

export interface GridProps {
  name: string;
  images: { url: string }[];
  rows?: string;
  columns?: string;
}

const GridContainer = styled.div<{ rows?: string; $columns?: string }>`
  display: grid;
  gap: 10px;
  max-width: 80%;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-rows: ${(props) => props.rows || "1fr"};
    grid-template-columns: ${(props) => props.$columns || "1fr 1fr"};
  }
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

const ImagesGrid: React.FC<GridProps> = ({
  name = "",
  images,
  rows,
  columns,
}) => {
  return (
    <Container>
      <WrapperFadeOnView>
        <LetterBanner title={name} fontSize="h3" bgcolor="white" />
      </WrapperFadeOnView>
      <GridContainer rows={rows} $columns={columns}>
        {images &&
          images?.map((image, index) => (
            <WrapperFadeOnView key={index}>
              <GridItem>{image?.url && <Card image={image.url} />}</GridItem>
            </WrapperFadeOnView>
          ))}
      </GridContainer>
    </Container>
  );
};

export default ImagesGrid;
