import { useState } from 'react';
import MyRequests from '../my_requests/MyRequests';
import MyProjects from '../my_projects/MyProjects';
import Settings from '../settings/Settings';
import styles from './tabs.module.css';

const Tabs = ({ user }) => {
  const [activeTab, setActiveTab] = useState('requests');

  return (
    <div className={styles.tabs}>
      <div className={styles.tabButtons}>
        <button
          className={`${styles.tabButton} ${activeTab === 'requests' ? styles.active : ''}`}
          onClick={() => setActiveTab('requests')}
        >
          Мои заявки
        </button>

        {
          user.role === 'researcher' && (
            <button
              className={`${styles.tabButton} ${activeTab === 'projects' ? styles.active : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Мои проекты
            </button>
          )
        }

        <button
          className={`${styles.tabButton} ${activeTab === 'settings' ? styles.active : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Настройки
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'requests' && <MyRequests />}

        {activeTab === 'projects' && user.role === 'researcher' && <MyProjects />}

        {activeTab === 'settings' && <Settings user={user} />}
      </div>
    </div>
  );
};

export default Tabs;