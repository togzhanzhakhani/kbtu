import { useState } from "react";

const usePagination = () => {

	const [curPage, setCurPage] = useState(1);
	const maxPage = 5; // TODO: change
	
	const toNextPage = () => {
		if(curPage + 1 > maxPage) {
			return;
		}

		setCurPage(p => p + 1);
	};

	const toPrevPage = () => {
		if(curPage - 1 <= 0) {
			return;
		}

		setCurPage(p => p - 1);
	};

	return {
		curPage, maxPage,
		toNextPage, toPrevPage,
	};
};

export default usePagination;