//CSS
import css from "./Home.module.css";

//IMPORTS
import { useEffect, useContext } from "react";

//CONTEXTS
import { PublicationsDataContext } from "../contexts/PublicationsContext";

//COMPONENT
import Publication from "../Publication";

const Home = () => {
	const { publicaciones, setPublicaciones } = useContext(PublicationsDataContext);

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
				return <Publication key={item._id} idPost={item._id} user={item.user} description={item.description} />;
			})}
		</section>
	);
};

export default Home;
