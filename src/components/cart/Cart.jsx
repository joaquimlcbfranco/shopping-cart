import styles from "./Cart.module.css";

const Cart = ({ cart, setCart }) => {
	const handleChange = (e) => {
		setQuantity(e.target.value);
	};

	const cartSubTotal = cart !== null ? cart.reduce((item, total) => {
			total += item.price;
			return total.price;
	}, 0) : 0;
	console.log(cartSubTotal);

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
								price={item.price}
								url={item.url}
							/>
						);
					})}
				{!cart && (
					<h1 className={styles.emptyCart}>
						Looks like your cart is empty
					</h1>
				)}
			</div>
			<div className={styles.cartBottom}>
				<div className={styles.subTotal}>
					<p>Subtotal</p>
					<p>{"$" + cartSubTotal}</p>
				</div>
				<button>Checkout</button>
			</div>
		</div>
	);
};

const CartItem = ({ id, title, quantity, unitPrice, price, url }) => {
	return (
		<div className={styles.item}>
			<div
				style={{
					backgroundImage: `url(${url})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
				aria-label="image of product"
				className={styles.productImg}
			>
				<button className={styles.removeItem}>&#x2715;</button>
			</div>
			<div className={styles.info}>
				<p>{title}</p>
				<div className={styles.amount}>
					<div className={styles.controls}>
						<label htmlFor="cart-quantity">Qty: </label>
						<input
							id="cart-quantity"
							type="text"
							placeholder=" "
							name="quantity"
							min="0"
							value={quantity}
							readOnly
							className={styles.input}
							pattern="^[0-9]*$"
						></input>
					</div>
					<p>Price: ${price * quantity}</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
