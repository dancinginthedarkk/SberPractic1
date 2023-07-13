import { Button360, HeaderContainer, Logo } from '../../styles/header';
import { HashLink } from 'react-router-hash-link';
const logo: string = require('../../assets/header-logo.svg').default;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Логотип офиса"></Logo>
      <HashLink to="/#panorama">
        <Button360>Экскурсия 360°</Button360>
      </HashLink>
    </HeaderContainer>
  );
};
