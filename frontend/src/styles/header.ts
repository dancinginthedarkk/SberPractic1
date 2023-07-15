import styled from 'styled-components';
import { DefaultButton } from './global';

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Logo = styled.img`
  width: 70px;
  height: 76px;
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
`;
