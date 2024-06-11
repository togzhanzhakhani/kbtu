import PersonalCabinet from '@modules/personal_cabinet/PersonalCabinet';
import Login from '@modules/authorization/Login';
import Registration from '@modules/authorization/Registration';
import Home from '@modules/home/Home';
import Contacts from '@modules/contacts/Contacts';
import Projects from '@modules/projects/Projects';
import Directions from '@modules/directions/DirectionsPage';
import NotFound from '@modules/not_found/NotFound';
import Project from '@modules/project/Project';
import getProjectById from '@common/api/getProjectById';
import Apply from '@modules/apply/Apply';

const routes = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/register',
		element: <Registration />
	},
	{
		path: '/profile',
		element: <PersonalCabinet />
	},
	{
		path: '/contacts',
		element: <Contacts />
	},
	{
		path: '/projects',
		element: <Projects />
	},
	{
		path: '/directions',
		element: <Directions />
	},
	{
		path: '/project/:id',
		element: <Project />,
		loader: async ({params}) => {
			return getProjectById(params.id);
		},
	},
	{
		path: '/apply',
		element: <Apply />,
	},

	// WARN: * route goes last
	{
		path: '/*',
		element: <NotFound />
	},
];

export default routes;