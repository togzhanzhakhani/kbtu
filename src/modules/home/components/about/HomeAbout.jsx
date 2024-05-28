import aboutCardsData from '@modules/home/utils/aboutCardsData';
import styles from './home_about.module.css';
import HomeAboutCard from '../about_card/HomeAboutCard';
import Container from '@common/components/container/Container';

const HomeAbout = () => {

	return (
		<Container 
			type='section'
			maxWidth='80rem' 
			isCentered
			className={styles.about}
		>
			<h2 className={styles.about_header}>
				О нас
			</h2>

			<div className={styles.about_cards}>
				{
					aboutCardsData.map((card, i) => {
						return (
							<HomeAboutCard
								key={card.id == null ? i : card.id}
								card={card}
								isImageLeft={i % 2 === 0}
							/>
						);
					})
				}
			</div>
		</Container>
	);
};

export default HomeAbout;