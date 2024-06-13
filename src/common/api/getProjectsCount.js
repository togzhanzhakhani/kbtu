import projects from "@modules/projects/utils/projects";

// WARN: current implemetation is mock-data dependent
const getProjectsCount = () => {
	return projects.length;
};

export default getProjectsCount;