import React from 'react';
import './chatField.css';

export default function ChatField(): JSX.Element {
  return (
    <>
      <div className="message__container">
        <div className="message__card person">
          <div className="contact-name">Я</div>
          <div className="message-content">С др</div>
        </div>
        <div className="message__card no-person">
          <div className="contact-name">Букин</div>
          <div className="message-content">Пасиб</div>
        </div>
        <div className="message__card no-person">
          <div className="contact-name">Букин</div>
          <div className="message-content">С др</div>
        </div>
        <div className="message__card person">
          <div className="contact-name">Я</div>
          <p className="message-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maxime!</p>
        </div>
      </div>
      <div className="input__container">
        <input placeholder="Put message..." className="default-input message-input" type="text" name="" id="" />
        <button type="button" className="message-send__button">
          Send
        </button>
      </div>
    </>
  );
}
