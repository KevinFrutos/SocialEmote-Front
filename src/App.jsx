//CSS
import css from "./App.module.css";

//IMPORTS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//CONTEXTS
import LoggedContext from "./components/contexts/IsLoggedContext"

//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

const App = () => {
	return (
		<LoggedContext>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
				<Footer />
			</Router>
		</LoggedContext>
	);
};

export default App;
