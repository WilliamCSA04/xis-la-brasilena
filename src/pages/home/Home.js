import React from 'react';
import { Header } from '../../components';
import { FIREBASE_ASSETS_BASE_URL } from '../../config';
import {
  CustomHeroBanner,
  InfoParagraph,
  TextWrapper,
  TitleWrapper,
} from './Home.styles';
import texts from './texts';

export default function Home() {
  return (
    <div>
      <Header>
        <img
          alt="Logotipo: Banderia brasileira com um xis no centro"
          src={`${FIREBASE_ASSETS_BASE_URL}Logo.svg?alt=media`}
        />
      </Header>
      <CustomHeroBanner
        bgImg={`${FIREBASE_ASSETS_BASE_URL}banner.jpeg?alt=media`}
      >
        <TextWrapper>
          <TitleWrapper>
            <h1>{texts['pt-BR'].heroBanner.title}</h1>
            <span>{texts['pt-BR'].heroBanner.postTitle}</span>
            <span>{texts['pt-BR'].heroBanner.highlightInfo}</span>
          </TitleWrapper>
          <InfoParagraph>{texts['pt-BR'].heroBanner.info}</InfoParagraph>
        </TextWrapper>
      </CustomHeroBanner>
    </div>
  );
}
