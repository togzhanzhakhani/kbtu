import PersonalCabinet from '@modules/personal_cabinet/PersonalCabinet';
import Login from '@modules/authorization/Login';
import Registration from '@modules/authorization/Registration';
import Home from '@modules/home/Home';
import Contacts from '@modules/contacts/Contacts';
import Projects from '@modules/projects/Projects';

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
];

export default routes;