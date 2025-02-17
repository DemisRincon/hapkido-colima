import React from "react";
import styled from "styled-components";

interface TestimonialsViewProps {
  testimonials: {
    title: string;
    text: string;
  }[];
  title: string;
}

const OuterContainer = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const Name = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Testimonials: React.FC<TestimonialsViewProps> = ({
  testimonials,
  title,
}) => {
  return (
    <OuterContainer>
      <h3>{title}</h3>
      <Container>
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <Name>{testimonial.title}</Name>
            <Message>{testimonial.text}</Message>
          </Card>
        ))}
      </Container>
    </OuterContainer>
  );
};

export default Testimonials;
