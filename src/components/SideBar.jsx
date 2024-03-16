"use client"
import { useState } from 'react';
import { FaHome, FaSave } from 'react-icons/fa';
import Styles from "./page.module.css"
import Home from './Home';
import SavedPosts from './SavedPosts';

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState('Home');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className={Styles.sidebar}>
      <div className={Styles.sidebaroptions}>
        <div
          className={`${Styles.option} ${Styles[activeOption === 'Home' ? 'active' : '']}`}
          onClick={() => handleOptionClick('Home')}
        >
          <FaHome className={Styles.icon} />
          Home
        </div>
        <div
          className={`${Styles.option} ${Styles[activeOption === 'Saved' ? 'active' : '']}`}
          onClick={() => handleOptionClick('Saved')}
        >
          <FaSave className={Styles.icon} />
          Saved
        </div>
      </div>
      <div className={Styles.rightarea}>

        {activeOption === 'Home' && <Home />}
        {activeOption === 'Saved' && <SavedPosts />}
      </div>
      <div className={Styles.dummyArea}>

      <div className={Styles.telegramContainer}>
      <svg className={Styles.telegram} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.19c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm4.59 8.33l-9.34 4.66c-.31.16-.65-.12-.48-.45l1.34-2.91 3.03 2.75c.24.22.62.05.56-.3l-.8-5.63 6.16-2.77c.28-.13.55.19.31.39l-9.52 5.7"/>
          </svg>
          <div className={Styles.dashboard}>DashBoard</div>
    </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
