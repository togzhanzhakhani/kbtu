const isCardFieldValid = (s) => {
	if(s == null || typeof s !== 'string') {
		return false;
	}

	return s.length;
};

export default isCardFieldValid;