import { createContext } from 'react';
import useProjects from '../hooks/useProjects';

const ProjectsContext = createContext({});

const ProjectsContextProvider = ({children}) => {

	const {
		projects, setProjects,
		isLoading, setLoading,
		projectsCount, stopRequest,
	} = useProjects();

	if(children == null) {
		return;
	}

	const projectsCtxVal = {
		projects, setProjects,
		isLoading, setLoading,
		projectsCount, stopRequest
	};

	return (
		<ProjectsContext.Provider value={projectsCtxVal}>
			{children}
		</ProjectsContext.Provider>
	);
};

export { ProjectsContextProvider };
export default ProjectsContext;