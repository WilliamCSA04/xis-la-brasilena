import React from 'react';
import { 
  Header,
  MealImages, 
} from '../../components';
import { FIREBASE_ASSETS_BASE_URL } from '../../config';
import {
  CustomHeroBanner,
  InfoParagraph,
  TextWrapper,
  TitleWrapper,
  CustomMiddleTitle,
  CostumMealWrapperOne,
  CustomMiddleConteiner,
  CostumMealImages,
  MealSection,
  MealTexts,
  MealParagraph,
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
      <MealSection>
      <CustomMiddleTitle>
        <h2>{texts['pt-BR'].menu.title}</h2>
      </CustomMiddleTitle>
      <CustomMiddleConteiner>
        <CostumMealWrapperOne>
          <CostumMealImages>
          <img
          alt=""
          src={`${FIREBASE_ASSETS_BASE_URL}x-sabor-1.jpeg?alt=media`}
          />
          </CostumMealImages>
          <MealTexts>
          <h3>{texts['pt-BR'].cheeseburgerMeat.title}</h3>
          <MealParagraph>
          <p>{texts['pt-BR'].cheeseburgerMeat.postTitle}</p>
          <p>{texts['pt-BR'].cheeseburgerMeat.info}</p>
          </MealParagraph>
          </MealTexts>
        </CostumMealWrapperOne>
        <CostumMealWrapperOne>
          <CostumMealImages>
            <MealImages>
            <img
              alt=""
              src={`${FIREBASE_ASSETS_BASE_URL}x-sabor-2.jpeg?alt=media`}
              />
            </MealImages>
          </CostumMealImages>
            <MealTexts>
            <h3>{texts['pt-BR'].cheeseburgerPork.title}</h3>
            <MealParagraph>
            <p>{texts['pt-BR'].cheeseburgerPork.postTitle}</p>
            <p>{texts['pt-BR'].cheeseburgerPork.info}</p>
            </MealParagraph>
            </MealTexts>
          </CostumMealWrapperOne>
          <CostumMealWrapperOne>
          <CostumMealImages>
          <img
          alt=""
          src={`${FIREBASE_ASSETS_BASE_URL}x-sabor-3.jpeg?alt=media`}
          />
          </CostumMealImages>
          <MealTexts>
          <h3>{texts['pt-BR'].cheeseburgerChicken.title}</h3>
          <MealParagraph>
          <p>{texts['pt-BR'].cheeseburgerChicken.postTitle}</p>
          <p>{texts['pt-BR'].cheeseburgerChicken.info}</p>
          </MealParagraph>
          </MealTexts>
          </CostumMealWrapperOne>
          </CustomMiddleConteiner>
          </MealSection>
    </div>
  );
}
