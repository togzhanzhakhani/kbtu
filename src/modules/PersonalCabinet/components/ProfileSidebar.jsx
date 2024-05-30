import React from 'react';
import profile from '../fakeData/profile.png'
import styles from './ProfileSidebar.module.css'

const ProfileSidebar = ({ user }) => {
  return (
  <div className={styles.profileSidebar}>
    <div className={styles.profilePhoto}>
      <img src={profile} alt="Profile" className={styles.profilePicture} />
  </div>
  <div className={styles.cont}>
    <div className={styles.text}><h2>{user.firstName} {user.lastName}</h2></div>
    <div className={styles.text}>{user.role === 'ordinary' ? 'Недропользователь' : 'Научный сотрудник'}</div>
    <div className={styles.label}>Email:</div>
    <div className={`${styles.text} ${styles.textlabel}`}>{user.email}</div>
    <div className={styles.label}>Номер телефона:</div>
    <div className={`${styles.text} ${styles.textlabel}`}>{user.phone}</div>
  </div>
</div>
  );
};

export default ProfileSidebar;
