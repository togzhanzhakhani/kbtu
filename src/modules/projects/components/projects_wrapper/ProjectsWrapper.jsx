import { useContext, useEffect, useState } from "react";
import Project from "../project/Project";
import Container from "@common/components/container/Container";
import ProjectsContext from "@modules/projects/contexts/ProjectsContext";
import styles from './projects_wrapper.module.css';
import ProjectsHeader from "../header/ProjectsHeader";
import ProjectsMain from "../main/ProjectsMain";
import ProjectsPagination from "../pagination/ProjectsPagination";

// ugly ass code
const ProjectsWrapper = () => {

	const {isOneViewed} = useContext(ProjectsContext);

	return (
		<>
			{
				isOneViewed
				?
					<Project />
				:
					<Container
						type='section'
						maxWidth='70rem'
						className={styles.module}
					>
						<ProjectsHeader />

						<ProjectsMain />

						<ProjectsPagination />
					</Container>
			}
		</>
	);
};

export default ProjectsWrapper;