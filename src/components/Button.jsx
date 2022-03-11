import css from "./Button.module.css";

const Button = ({ buttonName, buttonClass = css.default }) => {
	return (
		<>
			<p className={buttonClass}>{buttonName}</p>
		</>
	);
};

export default Button;
