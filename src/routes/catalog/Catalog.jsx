import Header from "../../components/header/Header.jsx";
import styles from "./Catalog.module.css"
import Card from "../../components/card/Card.jsx"

const Catalog = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
      <div className={styles.title}>
        <p>The ultimate catalog for every occasion</p>
      </div>
      <div className={styles.cardsWrapper}>
        <Card />
      </div>
		</div>
	);
};

export default Catalog;
