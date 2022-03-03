import React from 'react';
import './Room.css';
import ContactSidebar from '../../modules/ContactSidebar/index';

function Room(): JSX.Element {
  return (
    <div className="room-page__container">
      <ContactSidebar />
    </div>
  );
}

export default Room;
