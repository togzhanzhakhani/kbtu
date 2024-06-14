import ProjectCardField from '../card_field/ProjectCardField';
import downloadIcon from '@assets/icons/download.svg';
import styles from './project_card.module.css';

const ProjectCard = ({project}) => {
	
	const {
		title, descr, client, 
		status, direction, phone, 
		note, clientName
	} = project;

	return (
		<div className={styles.card}>
			<h2 className={styles.title}>
				{title || 'Заголовок отсутствует'}
			</h2>

			<div className={styles.fields}>
				<ProjectCardField
					label='Заказчик'
					value={client || 'Заказчик неизвестен'}
				/>

				<ProjectCardField
					label='Статус заявки'
					value={status || 'Статус отсутствует'}
				/>

				<ProjectCardField
					label='Тех задание'
					value='Техническое задание'
					icon={downloadIcon}
				/>

				<ProjectCardField
					label='Направление'
					value={direction || 'Направление неизвестно'}
				/>

				<ProjectCardField
					label='Описание'
					value={descr || 'Описание отсутствует'}
				/>

				<ProjectCardField
					label='ФИО ответственного лица от заказчика'
					value={clientName || 'ФИО отсутствует'}
				/>

				<ProjectCardField
					label='Контакты ответственного лица от заказчика'
					value={phone || 'Телефон отсутствует'}
				/>

				<ProjectCardField
					label='Примечание'
					value={note || 'Примечание отсутствует'}
				/>
			</div>
		</div>
	);
};

export default ProjectCard;