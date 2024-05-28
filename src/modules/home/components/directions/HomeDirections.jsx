import HomeDirectionsCard from '../directions_card/HomeDirectionsCard';
import Container from '@common/components/container/Container';
import directionsData from '@modules/home/utils/directionsData';
import styles from './home_directions.module.css';

// WARN: styling issue
// How does cards-grid behave?
// Does it have 3 columns at all times?
// What if there are less than 3 items in a row?
// How are the said cards aligned? 

const HomeDirections = () => {

	return (
		<Container 
			type='section'
			maxWidth='80rem' 
			isCentered
			className={styles.directions}
		>
			<h2 className={styles.directions_heading}>Направления</h2>

			<div className={styles.directions_cards}>
				{
					directionsData.map((dir, i) => {
						return (
							<HomeDirectionsCard
								key={dir.id == null ? i : dir.id}
								card={dir}
								isBlue={i % 2 !== 0}
							/>
						);
					})
				}
			</div>
		</Container>
	);
};

export default HomeDirections;