import styles from './contacts_map.module.css';

// NOTE: Temporary solution
// Real map-API is necessary
const ContactsMap = () => {

	return (
		<img 
			src="/src/assets/images/map.png" 
			alt="map" 
			className={styles.image}
		/>
	);
};

export default ContactsMap;