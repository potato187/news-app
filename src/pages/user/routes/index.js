import { Home } from "../pages";

const publicRoutes = [
	{
		path: "/*",
		Element: Home,
		defaultLayout: true,
	},
];

export { publicRoutes };
