import App from "../App.jsx";
import Catalog from "./catalog/Catalog.jsx";
import ErrorPage from "./error-page/ErrorPage.jsx";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "catalog",
		element: <Catalog />,
	},
];

export default routes;
