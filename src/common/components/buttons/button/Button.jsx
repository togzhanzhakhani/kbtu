
const Button = ({
	text, className = "",
	color = "", backgroundColor = "",
}) => {

	if(text == null || text.length === 0) {
		return;
	}

	const configStyles = {
		color: color,
		backgroundColor: backgroundColor,
	};

	return (
		<button className={className} style={configStyles}>
			{text}
		</button>
	);
};

export default Button;