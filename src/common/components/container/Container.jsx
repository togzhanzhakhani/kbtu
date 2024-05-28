import containerTypes from "@common/utils/containerTypes";

const Container = ({
	type = 'div',
	maxWidth = 'none', 
	isCentered = false,
	className = '',
	children, 
}) => {

	// WARN: what is prioritized? class or style?
	const configStyle = {
		maxWidth: maxWidth,
		margin: isCentered ? '0 auto' : 'auto',
	};

	const ContainerElement = containerTypes[type] || <div />;

	return (
		<ContainerElement  className={className} style={configStyle}>
			{children}
		</ContainerElement>
	);
};

export default Container;