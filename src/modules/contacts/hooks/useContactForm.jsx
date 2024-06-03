import { useState } from 'react';

const useContactForm = () => {

	const [formData, setFormData] = useState({
		name: '', surname: '',
		email: '', phone: '',
		topic: '', message: '',
	});

	const onFormChange = (e) => {
		const inputName = e.target.name;
		const newValue = e.target.value;
		
		setFormData(prev => {
			return {
				...prev,
				[inputName]: newValue,
			}
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		alert('Form has been submitted!')
	};

	return [formData, onFormChange, onSubmit]
};

export default useContactForm;