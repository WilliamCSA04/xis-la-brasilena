import styled from 'styled-components';
import {
  HeroBanner,
  MiddleTitle,
  MealWrapperOne,
  MiddleConteiner,
  MealImages,
} from '../../components';

export const TextWrapper = styled.div`
  margin: auto;
  padding: 1rem;
`;

export const TitleWrapper = styled.p`
  color: ${props => props.theme.lightMode.colors.primary.light};
  h1,
  span {
    font-size: 1.5rem;
    text-align: center;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 2rem;
      text-align: initial;
    }
  }
  h1 {
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      display: inline;
    }
  }
  span:first-of-type {
    font-weight: bold;
    display: block;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      display: initial;
    }
  }
  span:last-of-type {
    display: block;
    font-size: 2rem;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 4rem;
    }
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const InfoParagraph = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const CustomHeroBanner = styled(HeroBanner)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomMiddleConteiner = styled(MiddleConteiner)`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  flex-wrap: wrap;
`;

export const CustomMiddleTitle = styled(MiddleTitle)`
  h2 {
    color: ${props => props.theme.lightMode.colors.secondary.normal};
    font-size: 36px;
    line-height: 44px;
    position: relative;
    height: 55px;
  }
`;
export const CostumMealWrapperOne = styled(MealWrapperOne)`
  color: ${props => props.theme.lightMode.colors.white};
  background-color: ${props => props.theme.lightMode.colors.tertiary.dark};
  border-style: none;
  border-radius: 5px;
  box-shadow: 11px 10px 16px -4px rgba(0, 0, 0, 0.41);
  width: 20rem;
  margin-top: 1rem;
`;

export const CostumMealImages = styled(MealImages)`
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const MealSection = styled.section`
  padding: 20px;
  margin: 20px;
`;

export const MealTexts = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const MealParagraph = styled.div``;
