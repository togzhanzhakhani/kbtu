import PersonalCabinet from "@modules/personal_cabinet/PersonalCabinet";
import Login from "@modules/authorization/Login";
import Registration from "@modules/authorization/Registration";
import Home from "@modules/home/Home";

const routes = [
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/register",
		element: <Registration />
	},
	{
		path: "/profile",
		element: <PersonalCabinet />
	},
];

export default routes;