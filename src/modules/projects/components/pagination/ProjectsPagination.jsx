import { useLoaderData } from 'react-router-dom';
import ProjectsPaginationItem from '../pagination_item/ProjectsPaginationItem';
import usePagination from '@modules/projects/hooks/usePagination';
import caretDown from '@assets/icons/caret_down.svg';
import styles from './projects_pagination.module.css';

const ProjectsPagination = () => {

	const {projectsCount} = useLoaderData();

	const {
		curPage, pages,
		toPrevPage, toNextPage,
		toPage,
	} = usePagination(projectsCount);

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

	const Value = (v) => (
		<p className={styles.value}>
			{v}
		</p>
	);

	const curPageStyle = {
		color: 'var(--color-blue-dark)',
		borderColor: 'var(--color-blue-dark)',
	};

	return (
		<div className={styles.pagination}>
			<ProjectsPaginationItem 
				item={CaretLeft}
				boxClassName={styles.caret_left}
				onClick={toPrevPage}
			/>

			{
				pages.map((p, i) => (
					<ProjectsPaginationItem
						key={i}
						item={Value(p)}
						boxClassName={styles.item}
						style={p == curPage ? curPageStyle : {}}
						onClick={() => toPage(p)}
					/>
				))
			}

			<ProjectsPaginationItem
				item={CaretRight}
				boxClassName={styles.item}
				onClick={toNextPage}
			/>
		</div>
	);
};

export default ProjectsPagination;