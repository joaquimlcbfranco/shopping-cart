import styles from "./Card.module.css";
import { useState } from "react";

const Card = () => {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  }

	return (
		<div className={styles.card}>
			<div className={styles.image}></div>
			<div>
				<button></button>
				<input
					type="number"
					placeholder="Quantity"
					name="quantity"
					min="0"
					value={quantity}
          onChange={(e) => handleChange(e)}
				></input>
				<button></button>
			</div>
		</div>
	);
};

export default Card;
