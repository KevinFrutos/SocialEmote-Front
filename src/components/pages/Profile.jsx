//CSS
import css from "./Profile.module.css";

//IMPORTS
import { useContext } from "react";

//COMPONENTS
import Avatar from "../Avatar";

//CONTEXTS
import { UserDataContext } from "../contexts/UserDataContext";

const Profile = () => {
	const { userData } = useContext(UserDataContext);
	const { user, name, last_name, email, followers, followers_number, following, following_number } = userData;
	return (
		<section>
			<article className={css.defaultContainer}>
				<span className={`${css.titleContainer} ${css.title}`}>
					<Avatar />
					{user}
				</span>
				<ul className={css.defaultList}>
					<li>
						Nombre: <span className={css.defaultValores}>{name}</span>
					</li>
					<li>
						Apellido: <span className={css.defaultValores}>{last_name}</span>
					</li>
					<li>
						Email: <span className={css.defaultValores}>{email}</span>
					</li>
					<li>
						Numero de seguidores: <span className={css.defaultValores}>{followers_number}</span>
						{followers_number > 0 ? (
							<ol>
								{followers.map(item => (
									<li>{item.user}</li>
								))}
							</ol>
						) : null}
					</li>
					<li>
						Numero de sequídos: <span className={css.defaultValores}>{following_number}</span>
						{following_number > 0 ? (
							<ol>
								{following.map(item => (
									<li>{item.user}</li>
								))}
							</ol>
						) : null}
					</li>
				</ul>
			</article>
		</section>
	);
};

export default Profile;