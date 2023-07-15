import { Logo } from '../../styles/header';
import { FooterContainer } from '../../styles/footer';
import LogoIcon from '../../assets/logo.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={LogoIcon} alt="Логотип офиса"></Logo>
    </FooterContainer>
  );
};
