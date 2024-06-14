import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getProjectsCount from "@common/api/getProjectsCount";
import getProjects from "@common/api/getProjects";

const useProjects = () => {

	const [searchParams] = useSearchParams();
	const [projects, setProjects] = useState([]);
	const [projectsCount, setProjectsCount] = useState();

	const page = searchParams.get('page');
	const pageSize = searchParams.get('page_size');

	const [isLoading, setLoading] = useState(false);
	
	useEffect(() => {
		// eslint-disable-next-line
		const p = new Promise(res => {
			setLoading(true);

			const projectsCnt = getProjectsCount();
			projectsCnt.then(res);
		})
		.then(projectsCnt => {
			setProjectsCount(projectsCnt);
			return getProjects(page, pageSize, projectsCnt);
		})
		.then(projects => {
			setProjects(projects);
			setLoading(false);
		})
		.catch(e => {
			console.error(e);
			setLoading(false);
		});
	}, [page, pageSize]);

	return {
		projects, setProjects,
		projectsCount,
		isLoading, setLoading,
	};
};

export default useProjects;