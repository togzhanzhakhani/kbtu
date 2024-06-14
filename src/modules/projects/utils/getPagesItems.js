import doExist from "@common/utils/doExist";

// TODO: support '...' value
const getPagesItems = (startPage, pageSize, totalProjectsCount) => {

	if(!doExist(startPage, pageSize, totalProjectsCount)) {
		return [];
	}

	if(pageSize > totalProjectsCount) {
		return [1];
	}

	const maxPagesPossible = Math.floor(totalProjectsCount / pageSize);

	if(maxPagesPossible > 5) {
		return [
			startPage, startPage + 1,
			'...',
			maxPagesPossible - 1, maxPagesPossible,
		];
	}

	let pagesItems = [];
	for(let p = 1; p <= maxPagesPossible; p++) {
		pagesItems.push(p);
	}
	return pagesItems;
};

export default getPagesItems;