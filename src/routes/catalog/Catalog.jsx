import Header from "../../components/header/Header.jsx";
import styles from "./Catalog.module.css";
import Card from "../../components/card/Card.jsx";
import { useState, useEffect } from "react";

const Catalog = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
						title: item.title,
						price: item.price,
						quantity: 0
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

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.title}>
				<p>The ultimate catalog for every occasion</p>
			</div>
			<div className={styles.cardsWrapper}>
				<div className={styles.cardsGrid}>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Catalog;
