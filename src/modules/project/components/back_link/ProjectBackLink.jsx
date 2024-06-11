import { useNavigate } from 'react-router-dom';
import arrowLeft from '@assets/icons/arrow_left.svg';
import styles from './project_back_link.module.css';

const BackLink = () => {

	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className={styles.box} onClick={goBack}>
			<img 
				src={arrowLeft} 
				alt="arrow to the left" 
				className={styles.arrow_icon}
			/>

			<p className={styles.message}>
				Назад
			</p>
		</div>
	);
};

export default BackLink;