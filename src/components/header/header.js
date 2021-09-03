import styled from 'styled-components';

const Header = styled.header`
  position: absolute;
  left: 2rem;
  top: 2rem;
  color: yellow;
  display: flex;
  align-items: center;
  h1 {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-inline: auto;
    top: 2rem;
    h1 {
      visibility: hidden;
    }
  }
`;

export default Header;
