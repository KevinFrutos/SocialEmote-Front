//CSS
import css from "./Home.module.css";

import { useEffect } from "react";

const Home = () => {
	useEffect(async () => {
		const respuesta = await fetch("http://localhost:9000/user/publication", {
			method: "GET",
			credentials: "include",
		});
		const datos = await respuesta.json();
		console.log(datos);
	});

	return (
		<>
			<p>Home</p>
		</>
	);
};

export default Home;
