import { Container, TypographyDescription } from '../../styles/panorama';
import { LocationsContainer, TypographyH1 } from '../../styles/location';
import { CardLocation } from '../card-location';
import { AlgaeLong, AlgaeLongBottom } from '../../styles/global';
import AlgaeIcon from '../../assets/algae-2.svg';
import { useState } from 'react';
import { Modal } from '../../utils/modal';
import { BackgroundOverlay } from '../../utils/modal/overlay';

const cards = [
  { title: 'Холл' },
  { title: 'Кухня' },
  { title: 'Терасса' },
  { title: 'Коворкинг для иногородних сотрудников' },
  { title: 'Переговорные комнаты' },
  { title: 'Игровая комната' }
];

export const Locations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCard('');
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Container>
        <AlgaeLong src={AlgaeIcon}></AlgaeLong>
        <AlgaeLongBottom src={AlgaeIcon}></AlgaeLongBottom>
        <TypographyH1>Основные локации</TypographyH1>
        <TypographyDescription>
          Добро пожаловать на борт! <br />
          Здесь вы можете прогуляться по нашим основным палубам.
        </TypographyDescription>
        <LocationsContainer>
          {cards.map(card => (
            <CardLocation key={card.title} title={card.title} onClick={() => handleCardClick(card.title)} />
          ))}
          {isModalOpen && (
            <>
              <BackgroundOverlay closeModal={closeModal} />
              <Modal title={selectedCard} closeModal={closeModal} />
            </>
          )}
        </LocationsContainer>
      </Container>
    </>
  );
};
