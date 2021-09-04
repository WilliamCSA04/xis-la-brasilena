import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaWhatsapp } from 'react-icons/fa';
import { Header } from '../../components';
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
  Footer,
  ShareSection,
  SocialMedia,
  VerticalLine,
  OrderSection,
  OrderTitleWrapper,
  AcceptedCards,
  OrderWrapper,
  OrderImageWrapper,
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
        <h1>{texts.es.heroBanner.title}</h1>
      </Header>
      <CustomHeroBanner
        bgImg={`${FIREBASE_ASSETS_BASE_URL}banner.jpeg?alt=media`}
      >
        <TextWrapper>
          <TitleWrapper>
            <span>{texts.es.heroBanner.highlightInfo}</span>
          </TitleWrapper>
          <InfoParagraph>{texts.es.heroBanner.info}</InfoParagraph>
        </TextWrapper>
      </CustomHeroBanner>
      <main>
        <MealSection>
          <CustomMiddleTitle>
            <h2>{texts.es.menu.title}</h2>
          </CustomMiddleTitle>
          <CustomMiddleConteiner>
            <CostumMealWrapperOne>
              <CostumMealImages>
                <img
                  alt=""
                  src={`${FIREBASE_ASSETS_BASE_URL}x-sabor-1.jpeg?alt=media`}
                />
                <figcaption>{texts.es.cheeseburgerMeat.title}</figcaption>
              </CostumMealImages>
              <MealTexts>
                <p>{texts.es.cheeseburgerMeat.description}</p>
                <MealParagraph>
                  <p>{texts.es.cheeseburgerMeat.postTitle}</p>
                  <p>{texts.es.cheeseburgerMeat.info}</p>
                </MealParagraph>
              </MealTexts>
            </CostumMealWrapperOne>
            <CostumMealWrapperOne>
              <CostumMealImages>
                <img
                  alt=""
                  src={`${FIREBASE_ASSETS_BASE_URL}x-sabor-2.jpeg?alt=media`}
                />
                <figcaption>{texts.es.cheeseburgerPork.title}</figcaption>
              </CostumMealImages>
              <MealTexts>
                <p>{texts.es.cheeseburgerPork.description}</p>
                <MealParagraph>
                  <p>{texts.es.cheeseburgerPork.postTitle}</p>
                  <p>{texts.es.cheeseburgerPork.info}</p>
                </MealParagraph>
              </MealTexts>
            </CostumMealWrapperOne>
            <CostumMealWrapperOne>
              <CostumMealImages>
                <img
                  alt=""
                  src={`${FIREBASE_ASSETS_BASE_URL}x-sabor-3.jpeg?alt=media`}
                />
                <figcaption>{texts.es.cheeseburgerChicken.title}</figcaption>
              </CostumMealImages>
              <MealTexts>
                <p>{texts.es.cheeseburgerChicken.description}</p>
                <MealParagraph>
                  <p>{texts.es.cheeseburgerChicken.postTitle}</p>
                  <p>{texts.es.cheeseburgerChicken.info}</p>
                </MealParagraph>
              </MealTexts>
            </CostumMealWrapperOne>
          </CustomMiddleConteiner>
        </MealSection>
      </main>
      <Footer>
        <ShareSection>
          <h2>{texts.es.footer.shareSection.title}</h2>
          <SocialMedia>
            <a
              href="https://www.facebook.com/profile.php?id=100070803637422"
              aria-label="Página do Facebook"
            >
              <TiSocialFacebook size="1.5rem" color="white" />
            </a>
          </SocialMedia>
        </ShareSection>
        <VerticalLine />
        <OrderSection>
          <OrderImageWrapper>
            <img
              alt="Pagamento com yape"
              src={`${FIREBASE_ASSETS_BASE_URL}yape.jpg?alt=media`}
            />
            <img
              alt="Pagamento com yape"
              src={`${FIREBASE_ASSETS_BASE_URL}maquininha.png?alt=media`}
            />
          </OrderImageWrapper>
          <OrderWrapper>
            <OrderTitleWrapper>
              <h2>{texts.es.footer.order.request}:</h2>{' '}
              <a
                href="https://api.whatsapp.com/send?phone=51946531811"
                aria-label="Faça o pedido pelo whatsapp"
              >
                <FaWhatsapp />
                <span>946531811</span>
              </a>
            </OrderTitleWrapper>
            <AcceptedCards>{texts.es.footer.order.cards}</AcceptedCards>
          </OrderWrapper>
        </OrderSection>
      </Footer>
    </div>
  );
}
