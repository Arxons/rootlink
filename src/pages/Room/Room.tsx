import React from 'react';
import ContactSidebar from '../../modules/ContactSidebar';
import './room.css';

function Room(): JSX.Element {
  return (
    <div className="room-page__container">
      <ContactSidebar />
    </div>
  );
}

export default Room;
