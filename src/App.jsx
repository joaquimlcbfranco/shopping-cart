import appStyles from "./App.module.css";
import Home from "./routes/home/Home.jsx"

const App = () => {
  return (
    <div className={appStyles.appWrapper}>
      <Home />
    </div>
  )
}

export default App
