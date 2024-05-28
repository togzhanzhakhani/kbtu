import Container from '@common/components/container/Container';
import styles from './home_partners.module.css';

const HomePartners = () => {

	return (
		<Container 
			type='section'
			maxWidth='80rem' 
			isCentered
			className={styles.section}
		>
			<h3 className={styles.heading}>Партнеры</h3>

			
		</Container>
	);
};

export default HomePartners;