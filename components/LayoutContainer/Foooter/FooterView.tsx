import React from "react";
import { FooterLink } from "./FooterContainer";
import WrapperFadeOnView from "../../WrapperFadeOnView";
import styled from "styled-components";
import Icon from "../../Icon";

interface FooterViewProps {
  bottomMessage: string;
  footerLinks: FooterLink[][];
}

const FooterView: React.FC<FooterViewProps> = ({
  bottomMessage,
  footerLinks,
}) => {
  return (
    <BottomContainer>
      <WrapperFadeOnView>
        <FooterContainer>
          {footerLinks?.map((item, index) => {
            return (
              <SideContainer key={`item-${index}`}>
                {item?.map((element, index) => (
                  <ItemContainer key={`element-${index}`}>
                    <Icon iconName={element?.icon ?? ""} />
                    <Span>{element?.text}</Span>

                    {element?.image && (
                      <StyledImage
                        src={element?.image}
                        alt="footer"
                        width={100}
                        height={100}
                      />
                    )}
                  </ItemContainer>
                ))}
              </SideContainer>
            );
          })}
        </FooterContainer>
      </WrapperFadeOnView>
      <p>{bottomMessage}</p>
    </BottomContainer>
  );
};

export default FooterView;

const BottomContainer = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.navLink};
  font-size: 1.2rem;
  margin: 1rem 0.5rem;
`;

const StyledImage = styled.img`
  width: 100px;
  height: auto;
`;
