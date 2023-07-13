import { ArrowRight, Card, TypographyLocationName } from '../../styles/location';
import React from 'react';

const arrowRight: string = require('../../assets/arrow-right.svg').default;
const coworking: string = require('../../assets/coworking.svg').default;
const kitchen: string = require('../../assets/kitchen.svg').default;
const hall: string = require('../../assets/hall.svg').default;
const meeting: string = require('../../assets/meeting.svg').default;
const gaming: string = require('../../assets/gaming.svg').default;
const terassa: string = require('../../assets/terassa.svg').default;

type CardProps = {
  title: string;
};

const getBackground = (title: string) => {
  switch (title) {
    case 'Коворкинг для иногородних сотрудников':
      return coworking;
    case 'Переговорные комнаты':
      return meeting;
    case 'Игровая комната':
      return gaming;
    case 'Кухня':
      return kitchen;
    case 'Холл':
      return hall;
    case 'Терасса':
      return terassa;
    default:
      return hall;
  }
};

export const CardLocation: React.FC<CardProps> = ({ title }) => {
  const background = getBackground(title);
  return (
    <Card background={background}>
      <TypographyLocationName>{title}</TypographyLocationName>
      <ArrowRight src={arrowRight} />
    </Card>
  );
};
