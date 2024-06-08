import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import Container from '@common/components/container/Container';
import styles from './projects.module.css';

const Projects = () => {

	return (
		<Container className={styles.page}>
			<Header />

			<Container
				maxWidth='70rem'
				className={styles.module}
			>
				Projects
			</Container>

			<Footer />
		</Container>
	);
};

export default Projects;