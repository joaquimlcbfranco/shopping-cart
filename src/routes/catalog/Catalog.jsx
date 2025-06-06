import Header from "../../components/header/Header.jsx";
import ErrorPage from "../error-page/ErrorPage.jsx";
import styles from "./Catalog.module.css";
import Card from "../../components/card/Card.jsx";
import { useState, useEffect } from "react";

const Catalog = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const handleQuantity = (id, value) => {
		setItems(
			items.map((item) => {
				if (item.id === id) {
					return { ...item, quantity: value };
				}
				return item;
			})
		);
	};

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
						quantity: 0,
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
								loading={loading}
								error={error}
								handleQuantity={handleQuantity}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Catalog;
