import { ArrowRight, Card, TypographyLocationName, CardInside } from '../../styles/location';
import React from 'react';
import ArrowRightIcon from '../../assets/arrow-right.svg';
import Coworking from '../../assets/coworking.jpg';
import Kitchen from '../../assets/kitchen.jpg';
import Hall from '../../assets/hall.jpg';
import Meeting from '../../assets/meeting.jpg';
import Gaming from '../../assets/gaming.jpg';
import Terassa from '../../assets/terassa.jpg';
import { HashLink } from 'react-router-hash-link';

type CardProps = {
  title: string;
  onClick: () => void;
};

const getBackground = (title: string) => {
  switch (title) {
    case 'Коворкинг для иногородних сотрудников':
      return Coworking;
    case 'Переговорные комнаты':
      return Meeting;
    case 'Игровая комната':
      return Gaming;
    case 'Кухня':
      return Kitchen;
    case 'Холл':
      return Hall;
    case 'Терасса':
      return Terassa;
    default:
      return Hall;
  }
};

export const CardLocation: React.FC<CardProps> = ({ title, onClick }) => {
  const background = getBackground(title);

  return (
    <>
      <HashLink to="/#modal">
        <Card background={background} onClick={onClick}>
          <CardInside>
            <TypographyLocationName>{title}</TypographyLocationName>
            <ArrowRight src={ArrowRightIcon} />
          </CardInside>
        </Card>
      </HashLink>
    </>
  );
};
