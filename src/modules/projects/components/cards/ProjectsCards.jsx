import { useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import ProjectsCard from '../card/ProjectsCard';
import ProjectsContext from '@modules/projects/contexts/ProjectsContext';
import styles from './projects_cards.module.css';


const ProjectsCards = () => {

	const {projects, isLoading} = useContext(ProjectsContext);

	const errorEl = (
		<p className={styles.error_empty}>
			Проекты не найдены
		</p>
	);

	if(projects == null || !Array.isArray(projects)) {
		return errorEl;
	}

	return (
		<div className={styles.cards}>
			{
				isLoading 
					? 
					<ClipLoader 
						size='2.5rem'
						speedMultiplier='0.8'
						color="var(--color-blue-dark)" 
						className={styles.loader}
					/>
					:
					projects.length > 0 
						? 
						projects.map((card, i) => (
							<ProjectsCard
								key={card.id == null ? i : card.id}
								card={card}
							/>
						))
						:
						errorEl
			}
		</div>
	);
};

export default ProjectsCards;