import RequirementStar from '@common/components/requirement_star/RequirementStar';
import doExist from '@common/utils/doExist';
import clipIcon from '@assets/icons/clip.svg';
import styles from './apply_input_file.module.css';

const ApplyInputFile = ({
	label, isRequired = false,
}) => {

	if(!doExist(label)) {
		return;
	}

	const inputId = `${Math.random()}`;

	// TODO: finish
	const loadFile = (e) => {
		const file = e.target.files[0];

    if(file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				console.log(e);
			};

			reader.readAsDataURL(file);
    }
	};

	return (
		<div className={styles.box}>
			<div className={styles.label_box}>
				<label 
					htmlFor={inputId}
					className={styles.label}
				>
					{label}
				</label>

				{isRequired && <RequirementStar />}
			</div>

			<div className={styles.file_box}>
				<img 
					src={clipIcon} 
					alt="clip icon" 
					className={styles.clip_icon}
				/>

				<p className={styles.name}>
					{label}
				</p>

				<input
					id={inputId}
					type='file'
					className={styles.file_input}
					onChange={loadFile}
				/>
			</div>
		</div>
	);
};

export default ApplyInputFile;