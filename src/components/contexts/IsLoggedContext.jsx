import { useState, createContext } from "react";

export const IsLoggedContext = createContext();

const LoggedContext = props => {
	const initialState = false;

	const [isLogged, setIsLogged] = useState(initialState);

	return <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>{props.children}</IsLoggedContext.Provider>;
};

export default LoggedContext;
