import styles from './projects_header.module.css';

const ProjectsHeader = () => {

	return (
		<div className={styles.header}>
			<h2 className={styles.heading_primary}>
				Проекты
			</h2>

			<p className={styles.heading_secondary}>
				Проекты - это задачи, связанные с разработкой, 
				внедрением и совершенствованием новых технологий, 
				продуктов и процессов. 
			</p>
		</div>
	);
};

export default ProjectsHeader;