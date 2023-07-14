import { ArrowRight, Card, TypographyLocationName } from '../../styles/location';
import React from 'react';
import ArrowRightIcon from '../../assets/arrow-right.svg';
import Coworking from '../../assets/coworking.svg';
import Kitchen from '../../assets/kitchen.svg';
import Hall from '../../assets/hall.svg';
import Meeting from '../../assets/meeting.svg';
import Gaming from '../../assets/gaming.svg';
import Terassa from '../../assets/terassa.svg';
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

  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  //
  // const handleCardClick = () => {
  //   setIsModalOpen(true);
  // };
  //
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <HashLink to="/#modal">
        <Card background={background} onClick={onClick}>
          <TypographyLocationName>{title}</TypographyLocationName>
          <ArrowRight src={ArrowRightIcon} />
        </Card>
      </HashLink>
    </>
  );
};
