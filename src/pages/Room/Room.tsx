import React from 'react';
import ContactSidebar from '../../modules/ContactSidebar';
import './Room.css';

function Room(): JSX.Element {
  return (
    <div className="room-page__container">
      <ContactSidebar />
    </div>
  );
}

export default Room;
