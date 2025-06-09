import styles from "./Card.module.css";
import { useState } from "react";

const Card = ({ id, title, price, url, cart, setCart }) => {
	const [quantity, setQuantity] = useState(0);

	const handleChange = (e) => {
		setQuantity(e.target.value);
	};

	const increaseQuantity = () => {
		setQuantity((prevQuantity) => +prevQuantity + 1);
	};

	const decreaseQuantity = () => {
		setQuantity((prevQuantity) => +prevQuantity - 1);
	};

	const handleAddToCart = () => {
		if (quantity !== 0) {
			const exists = cart.some(item => item.id === id);

			if (exists) {
				setCart(
					cart.map((item) => {
						if (item.id === id) {
							const currQuantity = +item.quantity;
							return {
								...item,
								quantity: +currQuantity + +quantity,
							};
						}
						return item;
					})
				);
			}
			else {
				const itemPrice = quantity * price;
				setCart([...cart, {id, title, quantity, unitPrice: price, price: itemPrice, url}])
			}
		}
		else {
			console.log("entered, but quantity is 0");
		}
		setQuantity(0);
	};

	return (
		<div className={styles.card}>
			<div
				style={{
					backgroundImage: `url(${url})`,
					width: "100%",
					height: "250px",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "120px",
					borderRadius: "5px 5px 0 0",
					marginBottom: "auto",
				}}
				aria-label="image of product"
			></div>
			<div className={styles.bottomCard}>
				<div className={styles.price}>
					<p>${price}</p>
				</div>
				<div className={styles.title}>
					<h2>{title}</h2>
				</div>
				<div className={styles.shopActions}>
					<div className={styles.controls}>
						<button onClick={decreaseQuantity}>-</button>
						<input
							type="text"
							placeholder=" "
							name="quantity"
							min="0"
							value={quantity}
							onChange={(e) => handleChange(e)}
							className={styles.input}
							pattern="^[0-9]*$"
						></input>
						<button onClick={increaseQuantity}>+</button>
					</div>
					<div>
						<button className={styles.btn} onClick={handleAddToCart}>Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
