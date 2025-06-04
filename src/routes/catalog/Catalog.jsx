import Header from "../../components/header/Header.jsx";
import styles from "./Catalog.module.css"
import Card from "../../components/card/Card.jsx"

const Catalog = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
      <div className={styles.title}>
        <span><h1>All items <p>[37]</p></h1></span>
      </div>
      <div>
        <Card />
      </div>
		</div>
	);
};

export default Catalog;
