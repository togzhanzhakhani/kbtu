import { useContext, useEffect, useState } from 'react';
import Container from '@common/components/container/Container';
import ProjectCard from '../project_card/ProjectCard';
import ProjectBackLink from '../project_back_link/ProjectBackLink';
import ProjectsContext from '@modules/projects/contexts/ProjectsContext';
import styles from './project.module.css';

const Project = () => {

	const {projectId} = useContext(ProjectsContext);
	const [project, setProject] = useState({});

	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		// TODO: fetch project

		return () => {
			// TODO: abort a fetch
			setLoading(false);
		};
	}, [projectId]);

	return (
		<Container 
			type='section'
			maxWidth='80rem' 
			className={styles.module}
		>
			<ProjectBackLink />

			<ProjectCard
				isLoading={isLoading}
				project={project}
			/>
		</Container>
	);
};

export default Project;