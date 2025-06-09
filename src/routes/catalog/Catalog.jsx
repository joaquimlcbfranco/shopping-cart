import Header from "../../components/header/Header.jsx";
import ErrorPage from "../error-page/ErrorPage.jsx";
import styles from "./Catalog.module.css";
import Card from "../../components/card/Card.jsx";
import Cart from "../../components/cart/Cart.jsx";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const Catalog = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const cartData = useContext(CartContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch(
					"https://fakestoreapi.com/products?limit=12"
				);
				if (data.status >= 400) {
					throw new Error(
						`There has been an error fetching the requested data. Status: ${data.status}`
					);
				}
				const jsonData = await data.json();
				const dataArray = jsonData.map((item) => {
					return {
						id: item.id,
						title: item.title,
						price: item.price,
						url: item.image,
					};
				});
				setItems(dataArray);
			} catch (error) {
				setError(error);
				setItems([]);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return (
			<div className={styles.loadingWrapper}>
				<span className={styles.loader}></span>
			</div>
		);
	}

	if (error) {
		return <ErrorPage />;
	}

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.title}>
				<p>The ultimate catalog for every occasion</p>
			</div>
			<div className={styles.cardsWrapper}>
				<div className={styles.cardsGrid}>
					{items.map((item) => {
						return (
							<Card
								key={item.id}
								id={item.id}
								title={item.title}
								price={item.price}
								url={item.url}
								cart={cartData.cart}
								setCart={cartData.setCart}
							/>
						);
					})}
				</div>
			</div>
			<Cart
				cart={cartData.cart.length !== 0 ? cartData.cart : null}
				setCart={cartData.cart.length !== 0 ? cartData.setCart : null}
			/>
		</div>
	);
};

export default Catalog;
