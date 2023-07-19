import styled from 'styled-components';
import { DefaultButton, Typography } from './global';

type PanoramaProps = {
  isActive: boolean;
};

export const Container = styled.div`
  margin-bottom: 100px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2em;
  position: relative;
`;

export const HeaderPanorama = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TypographyH1 = styled(Typography)`
  color: #323f48;
  font-size: 100px;
  font-weight: 500;
  line-height: normal;
`;

export const Icon360 = styled.div`
  width: 160px;
  height: 58px;
  transform: rotate(9.081deg);
  border-radius: 60px;
  background: var(--unnamed, linear-gradient(90deg, #4ed1be 0%, #2dbe64 63.33%, #a1de83 100%));
  color: #f0f3fd;
  font-family: Inter, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  line-height: 58px;
  cursor: auto;

  &:hover {
    background: linear-gradient(90deg, #4ed1be 0%, #2dbe64 63.33%, #a1de83 100%);
    background-size: 400% 400%;
    animation: gradient 3s ease infinite;

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

export const TypographyDescription = styled(Typography)`
  color: #323f48;
  font-size: 30px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.75px;
  text-align: center;
`;

export const PanoramaContainer = styled.div`
  width: 100%;
  border-radius: 60px;
  height: 671px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
`;

export const PanoramaContent = styled.div<PanoramaProps>`
  filter: ${props => (props.isActive ? 'none' : 'brightness(0.3)')};
`;

export const ButtonPanorama = styled(DefaultButton)`
  height: 76px;
  background: #35c378;
  color: #f0f3fd;
  line-height: 173.523%;
  letter-spacing: -0.575px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out;
`;
