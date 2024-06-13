import doExist from "@common/utils/doExist";

// TODO: support '...' value
// TODO: further improve it, many bugfixed are needed
const getPagesItemsArray = (startPage, totalPagesCount) => {
	if(!doExist(startPage, totalPagesCount)) {
		throw new Error('Pages count must exist');
	}

	if(startPage + 5 >= totalPagesCount) {
		return;
	}

	if(totalPagesCount <= startPage + 5) {
		return [
			startPage, startPage + 1, startPage + 2,
			startPage + 3, startPage + 4,  
		];
	}

	return [
		startPage, startPage + 1, '...', totalPagesCount - 1, totalPagesCount,
	];
};

export default getPagesItemsArray;