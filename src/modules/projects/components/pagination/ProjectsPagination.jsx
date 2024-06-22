import { useContext } from 'react';
import { PropagateLoader } from 'react-spinners';
import ProjectsPaginationItem from '../pagination_item/ProjectsPaginationItem';
import ProjectsContext from '@modules/projects/contexts/ProjectsContext';
import usePagination from '@modules/projects/hooks/usePagination';
import caretDown from '@assets/icons/caret_down.svg';
import styles from './projects_pagination.module.css';

const ProjectsPagination = () => {

	const {stopRequest} = useContext(ProjectsContext);

	const {
		page: curPage, pages, toPrevPage, 
		toNextPage, toPage,
	} = usePagination(stopRequest);

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

	if(pages == null || pages.length === 0) {
		return (
		<div className={styles.container}>
			<PropagateLoader
				size='0.5rem'
				color='var(--color-blue-dark)'
				speedMultiplier='0.5'
				className={styles.loader}
			/>
		</div>
		);
	}

	return (
		<div className={styles.container}>
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