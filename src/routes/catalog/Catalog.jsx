import Header from "../../components/header/Header.jsx";
import ErrorPage from "../error-page/ErrorPage.jsx";
import styles from "./Catalog.module.css";
import Card from "../../components/card/Card.jsx";
import Cart from "../../components/cart/Cart.jsx";
import { useState, useEffect, useContext } from "react";
import { CartContext, CartOpenContext } from "../../context/CartContext.jsx";

const Catalog = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showFeedback, setShowFeedback] = useState(false);
	const cartData = useContext(CartContext);
	const cartOpenData = useContext(CartOpenContext);

	// Toggles feedback to true when add to cart button is clicked, shows a "added to cart" message
	const toggleFeedback = () => {
		setShowFeedback(true);
		console.log(showFeedback);
		setTimeout(() => setShowFeedback(false), 1500);
		console.log(showFeedback);
	};

	// Makes page scrollable if cart is closed, else can't scroll
	useEffect(() => {
		if (cartOpenData.cartOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Clean up in case component unmounts
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [cartOpenData.cartOpen]);

	// Fetch product data from API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch(
					"https://fakestoreapi.com/products?limit=12",
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
			<Header
				cartOpen={cartOpenData.cartOpen}
				setCartOpen={cartOpenData.setCartOpen}
			/>
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
								toggleFeedback={toggleFeedback}
							/>
						);
					})}
				</div>
			</div>
			<Cart
				cart={cartData.cart.length !== 0 ? cartData.cart : null}
				setCart={cartData.cart.length !== 0 ? cartData.setCart : null}
				cartOpen={cartOpenData.cartOpen}
				setCartOpen={cartOpenData.setCartOpen}
			/>
			<div
				className={`${styles.feedbackMessage} ${
					showFeedback ? styles.active : ""
				}`}
			>
				Item added to cart
			</div>
		</div>
	);
};

export default Catalog;
