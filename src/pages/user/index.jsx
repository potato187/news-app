import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const index = () => {
	return (
		<Routes>
			{publicRoutes.map(({ defaultLayout, Element, ...props }, index) => (
				<Route key={index} {...props} element={<Element />} />
			))}
		</Routes>
	);
};

export default index;
