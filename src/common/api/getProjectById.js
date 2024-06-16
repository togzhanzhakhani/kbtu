import projects from "@modules/projects/utils/projects";

// WARN: current implemetation is mock-data dependent
const getProjectById = (id) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			if(id == null) {
				rej(new Error('ID must exist'));
			}
		
			for(let i = 0; i < projects.length; i++) {
				if(projects[i].id == id) {
					res(projects[i]);
				}
			}
		
			res({});
		}, 2000)
	});
};

export default getProjectById;