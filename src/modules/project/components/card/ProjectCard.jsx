import ProjectCardField from '../card_field/ProjectCardField';
import styles from './project_card.module.css';

const ProjectCard = ({project}) => {
	
	const {
		title, descr, client, 
		direction, phone, note,
	} = project;

	return (
		<div className={styles.card}>
			<h2 className={styles.title}>
				{title}
			</h2>

			<div className={styles.fields}>
				<ProjectCardField
					label='Заказчик'
					value={client}
				/>

				<ProjectCardField
					label='Статус заявки'
					value='Нужно ли это вообще?'
				/>

				<ProjectCardField
					label='Тех задание'
					value='Иконка сюда. Техническое задание'
				/>

				<ProjectCardField
					label='Направление'
					value={direction}
				/>

				<ProjectCardField
					label='Описание'
					value={descr}
				/>

				<ProjectCardField
					label='ФИО ответственного лица от заказчика'
					value={client}
				/>

				<ProjectCardField
					label='Контакты ответственного лица от заказчика'
					value={phone}
				/>

				<ProjectCardField
					label='Примечание'
					value={note}
				/>
			</div>
		</div>
	);
};

export default ProjectCard;