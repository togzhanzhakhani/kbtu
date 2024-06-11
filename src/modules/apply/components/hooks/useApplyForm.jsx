import { useState } from "react";
import applyFormTemplate from "@modules/apply/utils/applyFormTemplate";

const useApplyForm = () => {

	const [formData, setFormData] = useState(applyFormTemplate);

	const change = (name, newValue) => {
		if(!Object.keys(formData).includes(name)) {
			throw new Error('Input name is wrong');
		}

		setFormData(p => ({
			...p,
			[name]: newValue,
		}));
	};

	return {
		formData, change,
	}
};

export default useApplyForm;