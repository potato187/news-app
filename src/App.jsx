import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{publicRoutes.map(({ Element, ...props }, index) => (
					<Route key={index} element={<Element />} {...props} />
				))}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
