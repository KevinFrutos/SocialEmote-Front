//CSS
import css from "./Home.module.css";

//IMPORTS
import { useEffect, useContext } from "react";

//CONTEXTS
import { PublicationsDataContext } from "../contexts/PublicationsContext";

//COMPONENT
import Publication from "../Publication";

//CONTROLLERS
import { getPublications } from "../controllers/httpRequests";

const Home = () => {
	const { publicaciones, setPublicaciones } = useContext(PublicationsDataContext);

	useEffect(async () => {
		try {
			const datos = await getPublications();
			datos ? setPublicaciones(datos) : console.log("Error en la peticion");
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<section className={css.default}>
			{publicaciones.map(item => {
				return (
					<Publication
						key={item._id}
						idPost={item._id}
						user={item.user}
						description={item.description}
						descriptionHandler={true}
					/>
				);
			})}
		</section>
	);
};

export default Home;
