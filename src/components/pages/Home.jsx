//CSS
import css from "./Home.module.css";

//IMPORTS
import { useEffect, useContext } from "react";

//CONTEXTS
import { IsLoggedContext } from "../contexts/IsLoggedContext";
import { UserDataContext } from "../contexts/UserDataContext";

const Home = () => {
	const { isLogged } = useContext(IsLoggedContext);
	const { setUserData } = useContext(UserDataContext);

	useEffect(async () => {
		if (isLogged) {
			try {
				const respuesta = await fetch("http://localhost:9000/user/follow", {
					method: "GET",
					credentials: "include",
				});
				const datosUsuario = await respuesta.json();
				setUserData(datosUsuario);
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

	return (
		<>
			<p>Home</p>
		</>
	);
};

export default Home;
