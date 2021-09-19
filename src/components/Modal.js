import React from "react";
import PropTypes from "prop-types";

import {Button} from "../styles/Buttons.style";
import {StyledModal} from "../styles/Modal.style";

const Modal = ({handleClick, isClicked}) => {
  const buttons = [
    {id: 1, label: "Report"},
    {id: 2, label: "Unfollow"},
    {id: 3, label: "Go to post"},
    {id: 4, label: "Tagged accounts"},
    {id: 5, label: "Share to..."},
    {id: 6, label: "Copy link"},
    {id: 7, label: "Embed"},
    {id: 8, label: "Cancel"},
  ];

  return (
    <StyledModal onClick={handleClick} isClicked={isClicked}>
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

Modal.propTypes = {
  handleClick: PropTypes.func,
  isClicked: PropTypes.bool,
};

export default Modal;
