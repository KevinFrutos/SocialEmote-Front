//CSS
import css from "./App.module.css";

//IMPORTS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//CONTEXTS
import LoggedContext from "./components/contexts/IsLoggedContext";
import UserContext from "./components/contexts/UserDataContext";
import PublicationsContext from "./components/contexts/PublicationsContext";

//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import PostPublication from "./components/pages/PostPublication";
import Profile from "./components/pages/Profile";
import Post from "./components/pages/Post";
import WebSocketConnection from "./components/WebSocketConnection";

const App = () => {
	return (
		<LoggedContext>
			<UserContext>
				<PublicationsContext>
					<Router>
						<Header />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
							<Route path='/publication' element={<PostPublication />} />
							<Route path='/profile' element={<Profile />} />
							<Route path='/post/:idPost' element={<Post />} />
						</Routes>
						<Footer />
						<WebSocketConnection />
					</Router>
				</PublicationsContext>
			</UserContext>
		</LoggedContext>
	);
};

export default App;
