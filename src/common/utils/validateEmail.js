const validateEmail = (email) => {
	if(email == null || typeof email !== 'string') {
		throw new Error('Passed value must be a string');
	}

	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	return regex.test(email);
};

export default validateEmail;