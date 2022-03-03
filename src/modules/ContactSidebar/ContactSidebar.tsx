import React from 'react';
import './ContactSidebar.css';
import ProfileSVG from '../../svg/ProfileSVG';

export default function ContactSidebar(): JSX.Element {
  return (
    <div className="contact-sidebar__container">
      <div className="search-panel__container">
        <input placeholder="Поиск" type="text" />
      </div>
      <div className="contact-sidebar__content">
        <div className="contact-card">
          <div className="contact-img">
            <ProfileSVG />
          </div>
          <div className="contact-name">Букин</div>
        </div>
      </div>
    </div>
  );
}
