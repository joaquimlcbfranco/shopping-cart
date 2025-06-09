import { useEffect, useState } from "react";
import styles from "./Cart.module.css";

const Cart = ({ cart, setCart }) => {
	let subTotal = 0;

  if (cart !== null) {
    cart.map(item => subTotal += (+item.quantity * +item.unitPrice))
  }

	return (
		<div className={styles.cartWrapper}>
			<div aria-label="close-button" className={styles.closeCart}>
				<p>Close</p>
			</div>
			<div className={styles.items}>
				{cart !== null &&
					cart.map((item) => {
						return (
							<CartItem
								key={item.id}
								id={item.id}
								title={item.title}
								quantity={item.quantity}
								unitPrice={item.unitPrice}
								url={item.url}
								cart={cart}
								setCart={setCart}
							/>
						);
					})}
				{!cart && (
					<h1 className={styles.emptyCart}>
						Your cart is empty
					</h1>
				)}
			</div>
			<div className={styles.cartBottom}>
				<div className={styles.subTotal}>
					<p>Total</p>
					<p>${Math.round(subTotal * 100) / 100}</p>
				</div>
				<button>Checkout</button>
			</div>
		</div>
	);
};

const CartItem = ({
	id,
	title,
	quantity,
	unitPrice,
	url,
	cart,
	setCart,
}) => {
	const [text, setText] = useState(quantity);

	const handleChange = (e) => {
		if (e.target.value !== 0) {
			setText(e.target.value);
			setCart(
				cart.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: e.target.value };
					}
					return item;
				})
			);
		}
	};

  const removeItem = () => {
    setCart(cart.filter(item => item.id !== id))
  }

  useEffect(() => {
    setText(quantity);
  }, [quantity])

	return (
		<div className={styles.item}>
			<button onClick={removeItem} className={styles.removeItem} title="Remove item">
				&#x2715;
			</button>
			<div
				style={{
					backgroundImage: `url(${url})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
				aria-label="image of product"
				className={styles.productImg}
			></div>
			<div className={styles.info}>
				<p>{title}</p>
				<div className={styles.amount}>
					<div className={styles.controls}>
						<label htmlFor="cart-quantity">Qty: </label>
						<input
							id="cart-quantity"
							type="number"
							placeholder=" "
							name="quantity"
							value={text}
							onChange={handleChange}
							className={styles.input}
							pattern="^[1-9]*$"
							min="1"
						></input>
					</div>
					<p>{"$" + Math.round(unitPrice * quantity * 100) / 100}</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
