import { url } from "./env";

// USER
export const registrarse = async (user, name, last_name, email, passwd) => {
	try {
		const respuesta = await fetch(`${url}/user/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user,
				name,
				last_name,
				email,
				passwd,
			}),
		});
		return respuesta.status;
	} catch (error) {}
};

export const login = async (user, passwd) => {
	try {
		const respuesta = await fetch(`${url}/user/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				user,
				passwd,
			}),
		});
		return respuesta.status;
	} catch (error) {
		console.log(error);
	}
};

export const logout = async () => {
	try {
		const respuesta = await fetch(`${url}/user/logout`, {
			method: "POST",
			credentials: "include",
		});
		return respuesta.status;
	} catch (error) {
		console.log(error);
	}
};

export const getUserData = async () => {
	try {
		const respuesta = await fetch(`${url}/user/data`, {
			method: "GET",
			credentials: "include",
		});
		return await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};

export const updateData = async (name, last_name, email, password) => {
	try {
		const respuesta = await fetch(`${url}/user/data`, {
			method: "PUT",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				last_name,
				email,
				password,
			}),
		});
		return await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};

export const follow = async user => {
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
		return await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};

export const unfollow = async user => {
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
		return await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};

// PUBLICATIONS
export const addPublication = async description => {
	try {
		const respuesta = await fetch(`${url}/user/publication`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				description,
			}),
		});
		return respuesta.status;
	} catch (error) {
		console.log(error);
	}
};

export const getPublications = async () => {
	const respuesta = await fetch(`${url}/user/publication`, {
		method: "GET",
		credentials: "include",
	});
	return await respuesta.json();
};

export const eliminarPost = async idPost => {
	try {
		const respuesta = await fetch(`${url}/user/publication`, {
			method: "DELETE",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				idPost,
			}),
		});
		return await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};

export const like = async (idPost, user_like) => {
	try {
		const respuesta = await fetch(`${url}/user/publication/like`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				idPost,
				user_like,
			}),
		});
		return await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};

export const unlike = async (idPost, user_like) => {
	try {
		const respuesta = await fetch(`${url}/user/publication/like`, {
			method: "DELETE",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				idPost,
				user_like,
			}),
		});
		return await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};

export const addComment = async (idPost, comment) => {
	try {
		const respuesta = await fetch(`${url}/user/publication/comment`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				idPost,
				comment,
			}),
		});
		return await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};
