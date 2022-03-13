//CSS
import css from "./Follow.module.css";

//RESOURCES
import followIcon from "../assets/img/follow.svg";
import unfollowIcon from "../assets/img/unfollow.svg";

//IMPORTS
import { useContext } from "react";

//CONTEXT
import { UserDataContext } from "./contexts/UserDataContext";

const Follow = ({ user }) => {
	const { userData, setUserData } = useContext(UserDataContext);

	const follow = async () => {
		try {
			const respuesta = await fetch("http://localhost:9000/user/follow", {
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
			const respuesta = await fetch("http://localhost:9000/user/unfollow", {
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
			{!userData.followers || userData.user === user ? (
				<span></span>
			) : userData.following.map(item => item.user).includes(user) ? (
				<img className={`${css.default} ${css.unfollow}`} src={unfollowIcon} onClick={unfollow} />
			) : (
				<img className={`${css.default} ${css.follow}`} src={followIcon} onClick={follow} />
			)}
		</>
	);
};

export default Follow;
