import { useState } from 'react';
import validateForm from '../utils/validateForm';
import isObjectEmpty from '@common/utils/isObjectEmpty';
import dataTemplate from '../utils/dataTemplate';

const useContactForm = () => {

	const [formData, setFormData] = useState(dataTemplate);
	const [errors, setErrors] = useState(dataTemplate);

	const onFormChange = (e) => {
		const inputName = e.target.name;
		const newValue = e.target.value;
		
		if(!Object.keys(formData).includes(inputName)) {
			console.error('Provided input name is invalid');
		}

		setFormData(prev => {
			return {
				...prev,
				[inputName]: newValue,
			}
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setErrors(dataTemplate);

		const {
			name, surname, email,
			phone, topic, message
		} = formData;

		const errors = validateForm(
			name, surname, email, phone, topic, message
		);

		if(!isObjectEmpty(errors)) {
			setErrors(p => ({
				...p,
				...errors,
			}));

			return;
		}

		// TODO: submit form logic below
		console.log('Form submit button\'s triggered');
	};

	return {formData, errors, onFormChange, onSubmit};
};

export default useContactForm;