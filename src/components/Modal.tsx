import React, {FC} from 'react';
import {Button} from '../styles/Buttons.style';
import {StyledModal} from '../styles/Modal.style';

interface ModalProps {
  handleClick: React.MouseEventHandler;
}

const Modal: FC<ModalProps> = ({handleClick}) => {
  const buttons = [
    {id: 1, label: 'Report'},
    {id: 2, label: 'Unfollow'},
    {id: 3, label: 'Go to post'},
    {id: 4, label: 'Tagged accounts'},
    {id: 5, label: 'Share to...'},
    {id: 6, label: 'Copy link'},
    {id: 7, label: 'Embed'},
    {id: 8, label: 'Cancel'},
  ];

  return (
    <StyledModal onClick={handleClick}>
      <div>
        {buttons.map((button) => (
          <Button key={button.id} onClick={handleClick}>
            {button.label}
          </Button>
        ))}
      </div>
    </StyledModal>
  );
};

export default Modal;
