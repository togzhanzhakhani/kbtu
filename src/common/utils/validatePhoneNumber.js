const validatePhoneNumber = (number) => {
	if(number == null || typeof number !== 'string') {
		throw new Error('Passed phone number must be a string');
	}

	const regex = /^(8|\+7)\d{10}$/;

	return regex.test(number);
};

export default validatePhoneNumber;