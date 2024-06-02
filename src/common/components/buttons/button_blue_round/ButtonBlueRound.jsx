import Button from "../button/Button";
import mergeClassnames from "@common/utils/mergeClassnames";
import styles from "./button_blue_round.module.css";

const ButtonBlueRound = ({text, className}) => {

	if(text == null || text.length === 0) {
		return;
	}

	return (
		<Button 
			className={mergeClassnames(styles.button_blue_round, className)}
			text={text}
			color="var(--color-white)"
			backgroundColor="var(--color-blue-dark)"
		/>
	)
};

export default ButtonBlueRound;