import { useState } from "react";

const useToggle = (initValue) => {
	const [value, setValue] = useState(initValue);

	const toggle = () => {
		setValue(p => !p);
	};

	return {
		value, toggle, setValue,
	}
};

export default useToggle;