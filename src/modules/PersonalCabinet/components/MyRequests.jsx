import React from 'react';
import { fakeRequests } from '../fakeData/fakeData';
import styles from './MyRequests.module.css'
import dateIcon from '../../../assets/icons/calendar.png'
import titleIcon from '../../../assets/icons/title.png'
import statusIcon from '../../../assets/icons/status.png'

const MyRequests = () => {
    //получаем заявки
    const requests = fakeRequests;
    const getStatusStyle = (status) => {
        switch (status) {
          case 'Отказано':
            return styles.denied;
          case 'В обработке':
            return styles.inProgress;
          case 'Опубликовано':
            return styles.published;
          default:
            return '';
        }
      };    
    
    return (
        <div className={styles.dataTable}>
        <div className={`${styles.row} ${styles.header}`}>
          <div className={styles.cell}>
            <img src={dateIcon} alt="Date" className={styles.icon} /> Дата
          </div>
          <div className={styles.cell}>
            <img src={titleIcon} alt="Title" className={styles.icon} /> Название
          </div>
          <div className={styles.cell}>
            <img src={statusIcon} alt="Status" className={styles.icon} /> Статус
          </div>
        </div>
        {requests.map(request => (
          <div className={styles.row} key={request.id}>
            <div className={styles.cell}>{request.date}</div>
            <div className={styles.cell}>{request.title}</div>
            <div className={styles.cell}>
            <div className={getStatusStyle(request.status)}>{request.status}</div>
          </div>
          </div>
        ))}
      </div>
    );
};

export default MyRequests;
