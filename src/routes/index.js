import { Admin, NotFound } from "../pages";

const publicRoutes = [
	{
		path: "/",
		Element: Admin,
	},
	{
		path: "*",
		Element: NotFound,
	},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
