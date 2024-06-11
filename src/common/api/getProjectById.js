import projects from "@modules/projects/utils/projects";

// WARN: current implemetation is mock-data dependent
const getProjectById = (id) => {
	if(id == null) {
		throw new Error('ID must exist');
	}

	for(let i = 0; i < projects.length; i++) {
		if(projects[i].id == id) {
			return projects[i];
		}
	}

	return null;
};

export default getProjectById;