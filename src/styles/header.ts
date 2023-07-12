import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  //border-bottom: 1px solid black;
`;

export const Logo = styled.img`
  width: 70px;
  height: 76px;
`;

export const Button360 = styled.button`
  border-radius: 20px;
  background: #35c378;
  height: 70px;
  padding: 21px 65px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0;
  color: #f0f3fd;
  font-family: Inter, sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

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
