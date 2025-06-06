import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className={styles.headerWrapper}>
			<header className={styles.navBar}>
				<div className={styles.navBarLeft}>
					<ul>
						<li>
							<Link className={styles.headerLinks} to="/">Home</Link>
						</li>
						<span></span>
						<li>
							<Link className={styles.headerLinks} to="/catalog">Catalog</Link>
						</li>
					</ul>
				</div>
				<div className={styles.navBarRight}>
					<a className={styles.headerLinks}>Cart</a>
				</div>
			</header>
		</div>
	);
};

export default Header;
