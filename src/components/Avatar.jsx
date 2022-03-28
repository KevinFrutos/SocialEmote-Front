//CSS
import css from "./Avatar.module.css";

//THIS IS NOT THE FINAL SOLUTION...
import img1 from "../assets/img/avatars/avatar-1.svg";
import img2 from "../assets/img/avatars/avatar-2.svg";
import img3 from "../assets/img/avatars/avatar-3.svg";
import img4 from "../assets/img/avatars/avatar-4.svg";
import img5 from "../assets/img/avatars/avatar-5.svg";
import img6 from "../assets/img/avatars/avatar-6.svg";
import img7 from "../assets/img/avatars/avatar-7.svg";
import img8 from "../assets/img/avatars/avatar-8.svg";

const Avatar = () => {
	const imgPaths = [img1, img2, img3, img4, img5, img6, img7, img8];
	const randomAvatar = Math.floor(Math.random() * imgPaths.length);

	return (
		<>
			<img className={css.default} src={`${imgPaths[randomAvatar]}`} alt={`Avatar numero ${randomAvatar}`} />
		</>
	);
};

export default Avatar;
