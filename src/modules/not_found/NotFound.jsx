import { useRouteError } from 'react-router-dom';
import Container from '@common/components/container/Container';
import styles from './not_found.module.css';

const NotFound = () => {
	const error = useRouteError();

	console.log(error);

	return (
		<Container
			maxWidth='70rem'
			className={styles.page}
		>
			<h1 className={styles.error}>
				404. Such page doesn&apos;t exist
			</h1>
		</Container>
	);
};

export default NotFound;