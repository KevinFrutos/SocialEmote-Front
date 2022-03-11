//CSS
import css from "./App.module.css";

//IMPORTS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
};

export default App;
