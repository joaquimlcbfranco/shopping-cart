import styles from "./Card.module.css";
import { useState } from "react";

const Card = ({ title, price, url, loading, error, handleQuantity }) => {
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

	return (
		<div className={styles.card}>
			<div
				style={{
					backgroundImage: `url(${url})`,
					width: "100%",
					height: "250px",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "150px",
          borderRadius: "5px 5px 0 0",
				}}
			></div>
			<div className={styles.price}>
				<p>$42</p>
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
					<button className={styles.btn}>Add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
