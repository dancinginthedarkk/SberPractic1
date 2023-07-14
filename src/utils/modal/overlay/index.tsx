import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.62);
  z-index: 9;
`;

type Props = {
  closeModal: () => void;
};

export const BackgroundOverlay: React.FC<Props> = ({ closeModal }) => {
  const handleOverlayClick = () => {
    closeModal();
  };

  return <Overlay onClick={handleOverlayClick} />;
};
