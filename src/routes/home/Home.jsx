import Header from "../../components/header/Header.jsx";
import styles from "./Home.module.css";
import product from "../../assets/product.png";
import { Link } from "react-router-dom";

const Home = () => {
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
		</div>
	);
};

export default Home;
