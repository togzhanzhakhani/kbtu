import Container from '@common/components/container/Container';
import styles from './home_partners.module.css';
import partnersLogos from '@modules/home/utils/partnersLogos';

const HomePartners = () => {

	return (
		<Container 
			type='section'
			maxWidth='80rem' 
			isCentered
			className={styles.section}
		>
			<h3 className={styles.heading}>Партнеры</h3>

			<div className={styles.logos}>
				{
					partnersLogos.map((p, i) => {
						return (
							<img 
								key={p.id == null ? i : p.id}
								src={p.imageUrl}
								alt={p.alt || ''}
								className={styles.logo}
							/>
						)
					})
				}
			</div>
		</Container>
	);
};

export default HomePartners;