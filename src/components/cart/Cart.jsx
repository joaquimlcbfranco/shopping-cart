import styles from "./Cart.module.css";

const Cart = () => {
	return (
		<div className={styles.cartWrapper}>
			<div aria-label="close-button" className={styles.closeCart}>
        <p>Close</p>
			</div>
			<div className={styles.items}>
				<div className={styles.item}>
					<div
						style={{
							backgroundImage:
								"url(https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg)",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "70px",
						}}
						aria-label="image of product"
						className={styles.productImg}
					><button className={styles.removeItem}>&#x2715;</button></div>
					<div className={styles.info}>
						<p>
							John Hardy Women's Legends Naga Gold & Silver Dragon
							Station Chain Bracelet aosdo gokwe
						</p>
						<div className={styles.amount}>
							<div className={styles.controls}>
                <label htmlFor="cart-quantity">Qty: </label>
								<input
                id="cart-quantity"
									type="text"
									placeholder=" "
									name="quantity"
									min="0"
									value={"10"}
                  readOnly
									className={styles.input}
									pattern="^[0-9]*$"
								></input>
							</div>
							<p>Price: $695</p>
						</div>
					</div>
				</div>
        <div className={styles.item}>
					<div
						style={{
							backgroundImage:
								"url(https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg)",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "70px",
						}}
						aria-label="image of product"
						className={styles.productImg}
					><button className={styles.removeItem}>&#x2715;</button></div>
					<div className={styles.info}>
						<p>
							John Hardy Women's Legends Naga Gold & Silver Dragon
							Station Chain Bracelet aosdo gokwe
						</p>
						<div className={styles.amount}>
							<div className={styles.controls}>
                <label htmlFor="cart-quantity">Qty: </label>
								<input
                id="cart-quantity"
									type="text"
									placeholder=" "
									name="quantity"
									min="0"
									value={"10"}
									readOnly
									className={styles.input}
									pattern="^[0-9]*$"
								></input>
							</div>
							<p>Price: $695</p>
						</div>
					</div>
				</div>
        <div className={styles.item}>
					<div
						style={{
							backgroundImage:
								"url(https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg)",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "70px",
						}}
						aria-label="image of product"
						className={styles.productImg}
					><button className={styles.removeItem}>&#x2715;</button></div>
					<div className={styles.info}>
						<p>
							John Hardy Women's Legends Naga Gold & Silver Dragon
							Station Chain Bracelet aosdo gokwe
						</p>
						<div className={styles.amount}>
							<div className={styles.controls}>
                <label htmlFor="cart-quantity">Qty: </label>
								<input
                id="cart-quantity"
									type="text"
									placeholder=" "
									name="quantity"
									min="0"
									value={"10"}
									readOnly
									className={styles.input}
									pattern="^[0-9]*$"
								></input>
							</div>
							<p>Price: $695</p>
						</div>
					</div>
				</div>
			</div>
      <div className={styles.cartBottom}>
        <div className={styles.subTotal}>
            <p>Subtotal</p>
            <p>$980</p>
        </div>
        <button>Checkout</button>
      </div>
		</div>
	);
};

export default Cart;
