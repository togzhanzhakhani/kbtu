import projects from "@modules/projects/utils/projects";

// Gets number of all projects
// WARN: current implemetation is mock-data dependent
const getProjectsCount = () => {
	return new Promise((res, rej) => {
		try {	
			setTimeout(() => res(projects.length), 1500);
		} catch(e) {
			rej(e);
		}
	})
	.catch(e => console.error(e));
};

export default getProjectsCount;