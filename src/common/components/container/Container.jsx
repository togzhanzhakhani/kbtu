
const Container = ({children, maxWidth = "none", isCentered = false}) => {

	const configStyle = {
		maxWidth: maxWidth,
		margin: isCentered ? "0 auto" : "auto",
	};

	return (
		<div style={configStyle}>
			{children}
		</div>
	);
};

export default Container;