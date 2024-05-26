import Button from "../button/Button";
import styles from "./button_blue_round.module.css";

const ButtonBlueRound = ({text}) => {

	if(text == null || text.length === 0) {
		return;
	}

	return (
		<Button 
			className={styles.button_blue_round}
			text="Подать заявку"
			color="var(--color-white)"
			backgroundColor="var(--color-blue-dark)"
		/>
	)
};

export default ButtonBlueRound;