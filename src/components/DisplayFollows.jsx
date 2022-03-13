//CSS
import css from "./DisplayFollows.module.css";

const DisplayFollows = ({ valueData, txtData }) => {
	return (
		<span className={css.default}>
			<span>{valueData}</span>
			<span>{txtData}</span>
		</span>
	);
};

export default DisplayFollows;
