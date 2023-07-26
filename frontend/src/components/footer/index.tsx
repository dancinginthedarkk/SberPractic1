import { Logo } from '../../styles/header';
import { FooterContainer } from '../../styles/footer';
import LogoIcon from '../../assets/logo.svg';
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <FooterContainer>
      <HashLink to="/#">
        <Logo src={LogoIcon} alt="Логотип офиса"></Logo>
      </HashLink>
    </FooterContainer>
  );
};
