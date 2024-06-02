import containerTypes from "@common/utils/containerTypes";
import mergeObjects from "@common/utils/mergeObjects";

const Container = ({
	type = 'div',
	maxWidth = 'none', 
	isCentered = false,
	className = '',
	style,
	children, 
}) => {

	// WARN: what is prioritized? class or style?
	const configStyle = {
		maxWidth: maxWidth,
		margin: isCentered ? '0 auto' : 'auto',
	};

	const ContainerElement = containerTypes[type] || <div />;

	return (
		<ContainerElement className={className} style={mergeObjects(style, configStyle) }>
			{children}
		</ContainerElement>
	);
};

export default Container;