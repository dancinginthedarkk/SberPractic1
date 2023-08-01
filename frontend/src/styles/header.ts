import styled from 'styled-components';
import { DefaultButton } from './global';

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;

  @media screen and (max-width: 480px) {
    height: 36px;
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 76px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 34px;
    height: 36px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 50px;
    height: 56px;
  }
`;

export const Button360 = styled(DefaultButton)`
  background: #35c378;
  color: #f0f3fd;

  a {
    text-decoration: none;
    color: #f0f3fd;
  }

  &:hover {
    background: linear-gradient(90deg, #35c378, #23a6d5, #35c378);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    transform: translate3d(0, 0, 0);

    @keyframes gradient {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    height: 50px;
    padding: 0 3rem;
  }
`;
