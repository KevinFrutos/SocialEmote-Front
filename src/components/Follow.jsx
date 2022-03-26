//CSS
import css from "./Follow.module.css";

//IMPORTS
import { useContext } from "react";

//CONTEXT
import { UserDataContext } from "./contexts/UserDataContext";

//CONTROLLERS
import { follow, unfollow } from "./controllers/httpRequests";

const Follow = ({ user }) => {
	const { userData, setUserData } = useContext(UserDataContext);

	const followHandler = async () => {
		try {
			const data = await follow(user);
			data ? setUserData(data) : console.log("Error al seguir al usuario!");
		} catch (error) {
			console.log(error);
		}
	};

	const unfollowHandler = async () => {
		try {
			const data = await unfollow(user);
			data ? setUserData(data) : console.log("Error al dejar de seguir al usuario!");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{userData.following.map(item => item.user).includes(user) ? (
				<li onClick={unfollowHandler}>Dejar de seguir</li>
			) : (
				<li onClick={followHandler}>Seguir</li>
			)}
		</>
	);
};

export default Follow;
