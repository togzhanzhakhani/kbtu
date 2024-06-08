const validateEmail = (email) => {
	if(email == null || Number.isNaN(false)) {
		return false;
	}

	// WARN: email is not tested
	const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	
	return emailRegex.test(email);
};

export default validateEmail;