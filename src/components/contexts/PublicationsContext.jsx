import { useState, createContext } from "react";

export const PublicationsDataContext = createContext();

const PublicationsContext = ({ children }) => {
	const [publicaciones, setPublicaciones] = useState([]);

	return (
		<PublicationsDataContext.Provider value={{ publicaciones, setPublicaciones }}>
			{children}
		</PublicationsDataContext.Provider>
	);
};

export default PublicationsContext;
