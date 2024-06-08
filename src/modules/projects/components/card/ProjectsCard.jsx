import styles from './projects_card.module.css';

const ProjectsCard = ({card}) => {

	if(card == null) {
		return;
	}

	const {
		title, descr, client, direction
	} = card;

	if(!title || !descr || !client || !direction) {
		return;
	}
	
	return (
		<div className={styles.card}>
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