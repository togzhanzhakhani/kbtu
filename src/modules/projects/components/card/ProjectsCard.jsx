import { useNavigate } from 'react-router-dom';
import styles from './projects_card.module.css';

const ProjectsCard = ({card}) => {

	const navigate = useNavigate();

	if(card == null) {
		return;
	}

	const {
		id, title, descr, client, direction
	} = card;

	if(!title || !descr || !client || !direction) {
		return;
	}
	
	const navToProject = () => {
		navigate(`/project/${id}`)
	};

	return (
		<div className={styles.card} onClick={navToProject}>
			<div className={styles.front}>
				<h3 className={styles.title}>
					{title}
				</h3>

				<p className={styles.descr}>
					{descr}
				</p>	
			</div>

			<div className={styles.info}>
				<div className={styles.info_box}>
					<p className={styles.info_label}>
						Заказчик
					</p>

					<p className={styles.info_main}>
						{client}
					</p>
				</div>

				<div className={styles.info_box}>
					<p className={styles.info_label}>
						Направление задачи
					</p>

					<p className={styles.info_main}>
						{direction}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;