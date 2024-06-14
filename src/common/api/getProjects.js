import doExist from "@common/utils/doExist";
import projects from "@modules/projects/utils/projects";

// WARN: current logic is mock-data dependant
const getProjects = (page, pageSize, maxProjectsCount) => {
	return new Promise((res, rej) => {
		try {
			if(!doExist(page, pageSize)) {
				res([]);
			}
			
			const pageInt = parseInt(page);
			const pageSizeInt = parseInt(pageSize);
		
			if(pageInt < 1 || pageSizeInt < 1) {
				res([]);
			}
		
			if(pageInt * pageSizeInt > maxProjectsCount) {
				setTimeout(() => res(projects), 2000)
			} else {
				const start = (pageInt - 1) * pageSizeInt;
			
				setTimeout(() => res(projects.slice(start, start + pageSizeInt)), 2000);
			}
		} catch(e) {
			rej(e);
		}
	})
};

export default getProjects;