import { useState } from "react";

const useProject = () => {

	const [isOneViewed, setOneViewed] = useState(false);
	const [projectId, setProjectId] = useState('');
	const [project, setProject] = useState({});

	const openProject = (newProjectId) => {
		setOneViewed(true);

		if(newProjectId != projectId) {
			setProject({});
		}

		setProjectId(newProjectId);
	};

	const closeProject = () => {
		setOneViewed(false);
	};

	return {
		isOneViewed, openProject,
		projectId, setProjectId,
		closeProject, project,
		setProject,
	};
};

export default useProject