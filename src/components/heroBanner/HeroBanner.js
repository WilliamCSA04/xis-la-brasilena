import styled from 'styled-components';

const HeroBanner = styled.div`
  height: 50rem;
  background-image: ${props => (props.bgImg ? `url('${props.bgImg}')` : '')};
  background-size: cover;
  background-repeat: no-repeat;
`;

export default HeroBanner;
