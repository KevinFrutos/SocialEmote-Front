//CSS
import css from "./Follow.module.css";

//IMPORTS
import { useContext } from "react";

//CONTEXT
import { UserDataContext } from "./contexts/UserDataContext";

//CONTROLLERS
import {url} from "./controllers/variables"

const Follow = ({ user }) => {
	const { userData, setUserData } = useContext(UserDataContext);

	const follow = async () => {
		try {
			const respuesta = await fetch(`${url}/user/follow`, {
				method: "PUT",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					user_followed: user,
				}),
			});
			const data = await respuesta.json();
			respuesta.status === 200 ? setUserData(data) : console.log(respuesta.status);
		} catch (error) {
			console.log(error);
		}
	};

	const unfollow = async () => {
		try {
			const respuesta = await fetch(`${url}/user/unfollow`, {
				method: "PUT",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					user_followed: user,
				}),
			});
			const data = await respuesta.json();
			respuesta.status === 200 ? setUserData(data) : console.log(respuesta.status);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{userData.following.map(item => item.user).includes(user) ? (
				// <img className={`${css.default} ${css.unfollow}`} src={unfollowIcon} onClick={unfollow} />
				<li onClick={unfollow}>Dejar de seguir</li>
			) : (
				// <img className={`${css.default} ${css.follow}`} src={followIcon} onClick={follow} />
				<li onClick={follow}>Seguir</li>
			)}
		</>
	);
};

export default Follow;
