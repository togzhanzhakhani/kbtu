import projects from '@modules/projects/utils/projects';
import styles from './projects_cards.module.css';
import ProjectsCard from '../card/ProjectsCard';

const ProjectsCards = () => {

	return (
		<div className={styles.cards}>
			{
				projects.map((card, i) => (
					<ProjectsCard
						key={card.id == null ? i : card.id}
						card={card}
					/>
				))
			}
		</div>
	);
};

export default ProjectsCards;