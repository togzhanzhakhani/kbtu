import { useNavigate, useRouteError } from 'react-router-dom';
import Container from '@common/components/container/Container';
import styles from './error_boundary.module.css';
import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';

const ErrorBoundary = () => {

	const nav = useNavigate();
	const error = useRouteError();

	const toHome = () => {
		nav('/');
	};

	return (
		<Container 
			maxWidth='80rem'
			className={styles.section}
		>
			<h2 className={styles.heading}>
				Что-то пошло не так :(
			</h2>

			<p className={styles.error_message}>
				{error.message || ''}
			</p>

			<ButtonBlueRound
				text='На главную страницу'
				className={styles.button}
				onClick={toHome}
			/>
		</Container>
	);
};

export default ErrorBoundary;