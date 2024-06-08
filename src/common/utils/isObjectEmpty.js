const isObjectEmpty = (obj) => {
	if(obj == null) {
		return false;
	}

	if(Array.isArray(obj)) {
		throw new Error('Passed object must not be an array');
	}

	return Object.keys(obj).length === 0;
};

export default isObjectEmpty;