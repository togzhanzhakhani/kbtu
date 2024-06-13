import { useState } from "react";
import getPagesItemsArray from "../utils/getPagesItemsArray";

const usePagination = (totalProjectsCount) => {

	const [curPage, setCurPage] = useState(1);
	const [pages, setPages] = useState(
		getPagesItemsArray(curPage, totalProjectsCount)
	);

	const maxPage = 5; // TODO: change
	
	const toNextPage = () => {
		if(curPage + 1 > maxPage) {
			return;
		}

		const pagesArr = getPagesItemsArray(curPage + 1, totalProjectsCount);
		setPages(p => pagesArr == null ? p : pagesArr);

		setCurPage(p => p + 1);
	};

	const toPrevPage = () => {
		if(curPage - 1 <= 0) {
			return;
		}

		const pagesArr = getPagesItemsArray(curPage - 1, totalProjectsCount);
		setPages(p => pagesArr == null ? p : pagesArr);

		setCurPage(p => p - 1);
	};

	const toPage = (value) => {
		if(value == null) {
			throw new Error('Value must be provided');
		}

		if(value == '...') {
			// TODO: what should happen?
			return;
		}

		const pagesArr = getPagesItemsArray(value, totalProjectsCount);
		setPages(p => pagesArr == null ? p : pagesArr);

		setCurPage(value);
	};

	return {
		curPage, pages,
		toNextPage, toPrevPage,
		toPage, 
	};
};

export default usePagination;