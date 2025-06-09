import Header from "../../components/header/Header.jsx";
import styles from "./Home.module.css";
import product from "../../assets/product.png";
import Cart from "../../components/cart/Cart.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const Home = () => {
	const cartData = useContext(CartContext);

	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.mainWrapper}>
				<div className={styles.homeHero}>
					<h1>Where convenience</h1>
					<h1>Meets choice</h1>
					<p>Your first stop for online shopping</p>
					<Link to="catalog">Catalog</Link>
				</div>
				<img src={product} alt="example of website products"></img>
			</main>
			<Cart cart={cartData.cart.length !== 0 ? cartData.cart : null} setCart={cartData.cart.length !== 0 ? cartData.setCart : null}/>
		</div>
	);
};

export default Home;
