import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import Container from '@common/components/container/Container';
import ProjectsHeader from './components/header/ProjectsHeader';
import ProjectsMain from './components/main/ProjectsMain';
import ProjectsPagination from './components/pagination/ProjectsPagination';
import { ProjectsContextProvider } from './contexts/ProjectsContext';
import styles from './projects.module.css';

const Projects = () => {

	return (
		<Container className={styles.page}>
			<Header />

			<ProjectsContextProvider>
				<Container
					type='section'
					maxWidth='70rem'
					className={styles.module}
				>
					<ProjectsHeader />

					<ProjectsMain />

					<ProjectsPagination />
				</Container>
			</ProjectsContextProvider>

			<Footer />
		</Container>
	);
};

export default Projects;