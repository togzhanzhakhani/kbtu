import { useState } from "react";

const useStatusFilters = () => {
	const [processing, setProcessing] = useState(false);
	const [accepted, setAccepted] = useState(false);
	const [denied, setDenied] = useState(false);

	const toggleProcessing = () => {
		setProcessing(p => !p);
	};

	const toggleAccepted = () => {
		setAccepted(p => !p);
	};

	const toggleDenied = () => {
		setDenied(p => !p);
	};

	return {
		processing, toggleProcessing,
		accepted, toggleAccepted,
		denied, toggleDenied,
	};
};

export default useStatusFilters;