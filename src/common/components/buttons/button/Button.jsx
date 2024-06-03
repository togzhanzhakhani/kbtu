import doExist from "@common/utils/doExist";

const Button = ({
	text, className = "",
	color = "", backgroundColor = "",
	onClick
}) => {

	if(!doExist(text, onClick) || text.length === 0) {
		return;
	}

	const configStyles = {
		color: color,
		backgroundColor: backgroundColor,
	};

	return (
		<button 
			className={className} 
			style={configStyles}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;