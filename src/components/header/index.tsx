import { Button360, HeaderContainer, Logo } from '../../styles/header';
import { HashLink } from 'react-router-hash-link';
import LogoIcon from '../../assets/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoIcon} alt="Логотип офиса"></Logo>
      <HashLink to="/#panorama">
        <Button360>Экскурсия 360°</Button360>
      </HashLink>
    </HeaderContainer>
  );
};
