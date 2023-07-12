import { Button360, HeaderContainer, Logo } from '../../styles/header';
const logo: string = require('../../assets/header-logo.svg').default;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Логотип офиса"></Logo>
      <a href="#panorama">
        <Button360>Экскурсия 360°</Button360>
      </a>
    </HeaderContainer>
  );
};
