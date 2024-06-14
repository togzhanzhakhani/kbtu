import ProjectsCards from '../cards/ProjectsCards';
import ProjectsConfig from '../config/ProjectsConfig';
import styles from './projects_main.module.css';

const ProjectsMain = () => {
	
	return (
		<div className={styles.container}>
			<ProjectsCards />

			<ProjectsConfig />
		</div>
	);
};

export default ProjectsMain;