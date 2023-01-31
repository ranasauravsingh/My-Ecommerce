import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HomeSlider from "./components/HomeSlider";

function App() {
	return (
		<div>
			<Header />
			<HomeSlider />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
