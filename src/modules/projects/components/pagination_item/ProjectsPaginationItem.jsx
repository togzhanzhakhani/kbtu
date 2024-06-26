import doExist from '@common/utils/doExist';
import mergeStrings from '@common/utils/mergeStrings';
import styles from './projects_pagination_item.module.css';

const ProjectsPaginationItem = ({
	item, onClick, boxClassName = '', style = {},
}) => {

	if(!doExist(item, onClick)) {
		return;
	}

	return (
		<div 
			className={mergeStrings(styles.box, boxClassName)}
			style={style}
			onClick={onClick}
		>
			{item}
		</div>
	);
};

export default ProjectsPaginationItem;