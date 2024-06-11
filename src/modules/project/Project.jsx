import { useLoaderData } from 'react-router-dom';
import Container from '@common/components/container/Container';
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import styles from './project.module.css';
import ProjectBackLink from './components/back_link/ProjectBackLink';
import ProjectCard from './components/card/ProjectCard';

const Project = () => {

	const project = useLoaderData();

	return (
		<>
			<Header />

			<Container 
				type='section'
				maxWidth='80rem' 
				className={styles.module}
			>
				<ProjectBackLink />

				<ProjectCard
					project={project}
				/>
			</Container>

			<Footer />
		</>
	);
};

export default Project;