import CartProvider from "../context/CartContext.jsx";
import App from "../App.jsx";
import Home from "./home/Home.jsx";
import Catalog from "./catalog/Catalog.jsx";
import ErrorPage from "./error-page/ErrorPage.jsx";

const routes = [
	{
		path: "/",
		element: (
			<CartProvider>
				<App />
			</CartProvider>
		),
		children: [
			{ index: true, element: <Home /> },
			{ path: "catalog", element: <Catalog /> },
		],
		errorElement: <ErrorPage />,
	},
];

export default routes;
