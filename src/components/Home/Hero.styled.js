import styled from "styled-components";

export const HeroContainer = styled.main`
  display: flex;
  width: 1312px;
  gap: 24px;
  margin-bottom: 24px;
`;

export const HeroWrapper = styled.div`
  border-radius: 30px;
  width: 720px;
  padding: 98px 64px;
  background: #f8f8f8;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 48px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: #121417;
`;

export const DecoratedText = styled.span`
  font-style: italic;
  font-weight: 400;
  background-color: #cbded3;
`;

export const HeroText = styled.p`
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  color: #121417;
  max-width: 471px;
  margin-bottom: 64px;
`;

export const HeroImg = styled.img`
  min-height: 530px;
  min-width: 568px;
`;
