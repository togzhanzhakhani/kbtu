import ButtonBlueRound from "@common/components/buttons/button_blue_round/ButtonBlueRound";
import styles from "./home_hero.module.css";

const HomeHero = () => {

	return (
		<div className={styles.hero}>
			<h1 className={styles.hero_header}>
				Казахстанско-Британский технический университет. 
				Инновации и Экспертиза для промышленности Казахстана
			</h1>

			<div className={styles.button_wrapper}>
				<ButtonBlueRound text="Подать заявку" />
			</div>
		</div>
	);
};

export default HomeHero;