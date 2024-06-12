import ProjectsPaginationItem from '../pagination_item/ProjectsPaginationItem';
import usePagination from '@modules/projects/hooks/usePagination';
import caretDown from '@assets/icons/caret_down.svg';
import styles from './projects_pagination.module.css';

const ProjectsPagination = () => {

	const {
		curPage, maxPage,
		toPrevPage, toNextPage,
	} = usePagination();

	const CaretLeft = (
		<img 
			src={caretDown}
			alt=''
			style={{
				transform: 'rotate(90deg)',
				filter: 'invert(0.4)',
			}}
		/>
	);

	const CaretRight = (
		<img 
			src={caretDown}
			alt=''
			style={{
				transform: 'rotate(-90deg)',
				filter: 'invert(0.4)',
			}}
		/>
	);

	return (
		<div className={styles.pagination}>
			<ProjectsPaginationItem 
				item={CaretLeft}
				boxClassName={styles.caret_left}
				onClick={toPrevPage}
			/>

			{/* Other pages */}

			<ProjectsPaginationItem
				item={CaretRight}
				boxClassName={styles.caret_right}
				onClick={toNextPage}
			/>
		</div>
	);
};

export default ProjectsPagination;