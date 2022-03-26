//CSS
import css from "./Profile.module.css";

//IMPORTS
import { useContext, useRef } from "react";

//COMPONENTS
import Avatar from "../Avatar";
import ProfileInput from "../ProfileInput";
import Button from "../Button";

//CONTEXTS
import { UserDataContext } from "../contexts/UserDataContext";

//CONTROLLERS
import { updateData } from "../controllers/httpRequests";

const Profile = () => {
	const { userData, setUserData } = useContext(UserDataContext);
	const { user, name, last_name, email, followers, followers_number, following, following_number } = userData;
	const newName = useRef();
	const newLast_name = useRef();
	const newEmail = useRef();
	const newPassword = useRef();

	const updateDataHandler = async () => {
		try {
			const data = await updateData(
				newName.current.value,
				newLast_name.current.value,
				newEmail.current.value,
				newPassword.current.value
			);
			if (data) {
				setUserData(data);
				newName.current.value = "";
				newLast_name.current.value = "";
				newEmail.current.value = "";
				newPassword.current.value = "";
			} else {
				console.log("Error al actualizar los datos");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section>
			<article className={css.defaultContainer}>
				<span className={`${css.titleContainer} ${css.title}`}>
					<Avatar />
					{user}
				</span>
				<ul className={css.defaultList}>
					<ProfileInput forName='nombre' labelName='Nombre' placeholderText={name} refIndex={newName} />
					<ProfileInput forName='apellido' labelName='Apellido' placeholderText={last_name} refIndex={newLast_name} />
					<ProfileInput forName='email' labelName='Email' placeholderText={email} refIndex={newEmail} />
					<ProfileInput
						isPassword={true}
						forName='password'
						labelName='Contraseña'
						placeholderText='NEW PASSWORD'
						refIndex={newPassword}
					/>
					<li>
						<Button buttonName='ACTUALIZAR' buttonClass={css.updateButton} clickHandler={updateDataHandler} />
					</li>
					<li>
						Numero de seguidores: <span className={css.defaultValores}>{followers_number}</span>
						{followers_number > 0 && (
							<ol>
								{followers.map(item => (
									<li key={item._id}>{item.user}</li>
								))}
							</ol>
						)}
					</li>
					<li>
						Numero de sequídos: <span className={css.defaultValores}>{following_number}</span>
						{following_number > 0 && (
							<ol>
								{following.map(item => (
									<li key={item._id}>{item.user}</li>
								))}
							</ol>
						)}
					</li>
				</ul>
			</article>
		</section>
	);
};

export default Profile;
