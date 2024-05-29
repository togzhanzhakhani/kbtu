import PersonalCabinet from "@modules/PersonalCabinet/PersonalCabinet";
import Home from "@modules/home/Home";

const routes = [
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/profile",
		element: <PersonalCabinet />
	}
];

export default routes;