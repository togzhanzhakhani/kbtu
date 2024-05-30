import Header from '@modules/header/Header';
import ProfileSidebar from './components/profile_sidebar/ProfileSidebar';
import Tabs from './components/tabs/Tabs';
import Footer from '@modules/footer/Footer';
import { fakeUser } from './api/fakeData';
import styles from './personal_cabinet.module.css';

const PersonalCabinet = () => {

  // NOTE: getting user data
  const user = fakeUser;

  return (
    <div className={styles.page}>
      <Header />

      <div className={styles.cabinet}>
        <ProfileSidebar user={user} />

        <Tabs user={user} />
      </div>

      <Footer />
    </div>
  );
};

export default PersonalCabinet;