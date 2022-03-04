import React from 'react';
import ChatField from '../../modules/ChatField';
import ContactSidebar from '../../modules/ContactSidebar';
import './room.css';

function Room(): JSX.Element {
  return (
    <div className="room-page__container">
      <div className="sidebar__container">
        <ContactSidebar />
      </div>
      <div className="chat__container">
        <ChatField />
      </div>
    </div>
  );
}

export default Room;
