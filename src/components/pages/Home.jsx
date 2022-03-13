//CSS
import css from "./Home.module.css";

//IMPORTS
import { useEffect, useState } from "react";

//COMPONENT
import Publication from "../Publication";

const Home = () => {
	const [publicaciones, setPublicaciones] = useState([]);

	useEffect(async () => {
		const respuesta = await fetch("http://localhost:9000/user/publication", {
			method: "GET",
			credentials: "include",
		});
		const datos = await respuesta.json();
		setPublicaciones(datos);
		//console.log(datos);
	}, []);

	return (
		<section className={css.default}>
			{publicaciones.map(item => {
				return <Publication key={item._id} user={item.user} description={item.description} />;
			})}
		</section>
	);
};

export default Home;
