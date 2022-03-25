//CSS
import css from "./EmoteCounter.module.css";

//IMPORTS
import { Link } from "react-router-dom";

const EmoteCounter = ({ imgPath, counter, altDescription, toPath, onClickHandler }) => {
	return (
		<>
			{toPath ? (
				<span className={css.defaultContainer}>
					<Link className={css.linkStyles} to={toPath}>
						<img className={css.default} src={imgPath} alt={altDescription} />
					</Link>
					<span>{counter ?? 0}</span>
				</span>
			) : (
				<span className={css.defaultContainer}>
					<img className={css.default} src={imgPath} alt={altDescription} onClick={onClickHandler} />
					<span>{counter ?? 0}</span>
				</span>
			)}
		</>
	);
};

export default EmoteCounter;
