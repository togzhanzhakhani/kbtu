import { useContext } from 'react';
import ProjectsContext from '@modules/projects/contexts/ProjectsContext';
import arrowLeft from '@assets/icons/arrow_left.svg';
import styles from './project_back_link.module.css';

const ProjectBackLink = () => {

	const {
		closeProject,
	} = useContext(ProjectsContext);

	const goBack = () => {
		closeProject();
	};

	return (
		<div className={styles.box} onClick={goBack}>
			<img 
				src={arrowLeft} 
				alt="arrow to the left" 
				className={styles.arrow_icon}
			/>

			<p className={styles.message}>
				Назад
			</p>
		</div>
	);
};

export default ProjectBackLink;