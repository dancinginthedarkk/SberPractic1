import { Logo } from '../../styles/header';
import { FooterContainer } from '../../styles/footer';

const logo: string = require('../../assets/header-logo.svg').default;

export const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Логотип офиса"></Logo>
    </FooterContainer>
  );
};
