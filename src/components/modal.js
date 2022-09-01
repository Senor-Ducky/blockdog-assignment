import React from "react";
import Popup from "reactjs-popup";
import '../components/modal.css'

function Modal(props)  {

    

    return(
    <Popup
    trigger={props.trigger}
    modal
    
  >
    {close => (
    <div className="modal-container">
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Message </div>
        <div className="content">
          {props.content}
        </div>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close 
          </button>
        </div>
        </div>
    )}
  </Popup>
    );
}

export default Modal;