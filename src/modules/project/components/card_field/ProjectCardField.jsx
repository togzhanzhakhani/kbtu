import isCardFieldValid from '@modules/project/utils/isCardFieldValid';
import styles from './project_card_field.module.css';

const ProjectCardField = ({
	label, value, isFileField = false
}) => {

	if(!isCardFieldValid(label) || !isCardFieldValid(value)) {
		return;
	}

	return (
		<div className={styles.field}>
			<p className={styles.label}>
				{label}
			</p>

			<p className={styles.value}>
				{value}
			</p>
		</div>
	);
};

export default ProjectCardField;