import appStyles from "./App.module.css";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<div className={appStyles.appWrapper}>
      <Outlet />
		</div>
	);
};

export default App;
