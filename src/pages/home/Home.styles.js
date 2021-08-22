import styled from 'styled-components';
import { HeroBanner } from '../../components';

export const TextWrapper = styled.div`
  margin: auto;
`;

export const TitleWrapper = styled.p`
  color: ${props => props.theme.lightMode.colors.primary.light};
  h1 {
    font-size: 2rem;
    display: inline;
  }
  span:first-of-type {
    font-size: 2rem;
    font-weight: bold;
  }
  span:last-of-type {
    display: block;
    font-size: 4rem;
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
