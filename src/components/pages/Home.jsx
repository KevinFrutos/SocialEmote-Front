//CSS
import css from "./Home.module.css";

//IMPORTS
import { useEffect, useContext } from "react";

//CONTEXTS
import { PublicationsDataContext } from "../contexts/PublicationsContext";

//COMPONENT
import Publication from "../Publication";

//CONTROLLERS
import {url} from "../controllers/variables"

const Home = () => {
	const { publicaciones, setPublicaciones } = useContext(PublicationsDataContext);

	useEffect(async () => {
		const respuesta = await fetch(`${url}/user/publication`, {
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
				return <Publication key={item._id} idPost={item._id} user={item.user} description={item.description} />;
			})}
		</section>
	);
};

export default Home;
