import { createContext } from 'react';
import useProjects from '../hooks/useProjects';

const ProjectsContext = createContext({});

const ProjectsContextProvider = ({children}) => {

	const {
		projects, setProjects,
		isLoading, setLoading,
		projectsCount,
	} = useProjects();

	if(children == null) {
		return;
	}

	const projectsCtxVal = {
		projects, setProjects,
		isLoading, setLoading,
		projectsCount
	};

	return (
		<ProjectsContext.Provider value={projectsCtxVal}>
			{children}
		</ProjectsContext.Provider>
	);
};

export { ProjectsContextProvider };
export default ProjectsContext;