import React from 'react';
import styles from './PersonalCabinet.module.css';
import ProfileSidebar from './components/ProfileSidebar';
import Tabs from './components/Tabs';
import { fakeUser } from './fakeData/fakeData';

const PersonalCabinet = () => {
  //получаем данные юзера
    const user = fakeUser;

  return (
    <div className={styles.personalCabinet}>
      <ProfileSidebar user={user} />
      <Tabs user={user} />
    </div>
  );
};

export default PersonalCabinet;
