import data from '@modules/projects/utils/data';
import styles from './projects_cards.module.css';
import ProjectsCard from '../card/ProjectsCard';

const ProjectsCards = () => {

	return (
		<div className={styles.cards}>
			{
				data.map((card, i) => (
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