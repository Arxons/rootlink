import React from 'react';
import ProfileSVG from '../../svg/ProfileSVG';
import './ContactSidebar.css';

export default function ContactSidebar(): JSX.Element {
  return (
    <div className="contact-sidebar__container">
      <div className="search-panel__container">
        <input className="search-input" placeholder="Search" type="text" />
      </div>
      <div className="contact-sidebar__content">
        <div className="contact-card">
          <div className="contact-img">
            <ProfileSVG />
          </div>
          <div className="contact-name">Букин</div>
          <div className="contact-status">Online</div>
        </div>
      </div>
    </div>
  );
}
