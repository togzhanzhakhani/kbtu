import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import Container from '@common/components/container/Container';
import ProjectsHeader from './components/header/ProjectsHeader';
import styles from './projects.module.css';
import ProjectsMain from './components/main/ProjectsMain';
import ProjectsPagination from './components/pagination/ProjectsPagination';

const Projects = () => {

	return (
		<Container className={styles.page}>
			<Header />

			<Container
				type='section'
				maxWidth='70rem'
				className={styles.module}
			>
				<ProjectsPagination />

				<ProjectsHeader />

				<ProjectsMain />
			</Container>

			<Footer />
		</Container>
	);
};

export default Projects;