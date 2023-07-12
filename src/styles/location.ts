import styled from 'styled-components';
const locationHoll: string = require('../assets/loca-1.svg').default;

export const LocationsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 59px;
`;

export const Card = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 50px;
  background-image: url(${locationHoll});
  background-repeat: no-repeat;
  background-size: cover;
`;
