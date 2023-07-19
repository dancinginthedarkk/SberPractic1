import React from 'react';
import {
  CloseIcon,
  ModalContainer,
  ModalContainerInside,
  ModalPanorama,
  TypographyDescription,
  TypographyHeader
} from '../../styles/modal';
import CloseModalIcon from '../../assets/close-icon.svg';
import { ThreeScene } from '../../webgl/ThreeScene';

type Props = {
  title: string;
  closeModal: () => void;
};

const descriptions: Record<string, string> = {
  Холл: 'Холл – это пространство, способствующее сотрудничеству, идеально подходящее для проведения конференций, встреч, семинаров или просто для творческого обмена идей в повседневной рабочей обстановке. В зоне установлены современные аудио- и видеосистемы для презентаций и видеоконференций, включая большой экран и проектор. Все это обеспечивает высококачественный звук и изображение, делая мероприятия и презентации максимально эффективными.',
  Кухня:
    'Кухня оборудована всеми  удобствами: от  бытовых приборов, включая кофе-машину, микроволновку и холодильник, до полного комплекта столовой посуды и приборов. Также мы предусмотрели автомат с питьевой водой для удобства наших сотрудников.',
  Терасса:
    'Терраса нашего офиса – это исключительное пространство, где рабочий процесс сливается с отдыхом.  Мягкие  кресла  создают множество уютных уголков для непринужденного общения или самостоятельной работы на свежем воздухе. терраса обеспечивает  обзор на городской пейзаж, что превращает её в идеальную зону для перерывов, релаксации и поиска новых идей.',
  'Коворкинг для иногородних сотрудников':
    'Наш коворкинг для иногородних сотрудников - это совмещение комфорта, функциональности и качественной рабочей атмосферы. Разработанный с учетом потребностей наших коллег, приезжающих из других городов. Коворкинг оборудован высокоскоростным Wi-Fi, комфортными рабочими местами со стульями и столами, а также зонами отдыха, где можно расслабиться и взять перерыв.',
  'Переговорные комнаты':
    'В нашем офисе находятся современные и функциональные переговорные комнаты, созданные для обеспечения эффективной и продуктивной работы наших сотрудников. Каждая переговорная комната названая в честь морей Росси. В них есть всё необходимое для комфортного общения и презентаций: от профессионального оборудования для видеоконференций, проекторов и интерактивных досок до удобных столов и стульев.',
  'Игровая комната':
    'Игровая зона в нашем офисе – это идеальное пространство для отдыха и восстановления энергии. Центральными элементами игровой зоны являются теннисный стол и кикер. Теннисный стол, подходящий как для случайных партий, так и для серьезных турниров, помогает сотрудникам оставаться в форме и поддерживает здоровый дух соревнования. Рядом расположен кикер – классическая игра, которая приносит радость и веселье, а также способствует укреплению командного духа.'
};

export const Modal = ({ title, closeModal }: Props) => {
  const description = descriptions[title] || 'Описание не найдено';

  let initialPanoramaId = 1;
  switch (title) {
    case 'Холл':
      initialPanoramaId = 1;
      break;
    case 'Кухня':
      initialPanoramaId = 2;
      break;
    case 'Терасса':
      initialPanoramaId = 3;
      break;
    case 'Коворкинг для иногородних сотрудников':
      initialPanoramaId = 3;
      break;
    case 'Переговорные комнаты':
      initialPanoramaId = 3;
      break;
    case 'Игровая комната':
      initialPanoramaId = 3;
      break;
    default:
      initialPanoramaId = 1;
  }

  return (
    <>
      <ModalContainer>
        <ModalContainerInside id="modal">
          <TypographyHeader>{title}</TypographyHeader>
          <ModalPanorama>
            <ThreeScene initialPanoramaId={initialPanoramaId} isInteractive={true} />
          </ModalPanorama>
          <TypographyDescription>{description}</TypographyDescription>
          <CloseIcon src={CloseModalIcon} onClick={closeModal}></CloseIcon>
        </ModalContainerInside>
      </ModalContainer>
    </>
  );
};
