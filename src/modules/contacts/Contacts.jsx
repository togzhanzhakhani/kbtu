import Container from '@common/components/container/Container';
import ContactsHeader from './components/header/ContactsHeader';
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import styles from './contacts.module.css';
import ContactsMain from './components/main/ContactsMain';
import ContactsMap from './components/map/ContactsMap';

const Contacts = () => {

	return (
		<Container type='section' className={styles.page}>
			<Header />

			<Container
				type='section'
				maxWidth='75rem'
				className={styles.section}
			>
				<ContactsHeader />

				<ContactsMain />		

				<ContactsMap />	
			</Container>

			<Footer />
		</Container>
	);
};

export default Contacts;