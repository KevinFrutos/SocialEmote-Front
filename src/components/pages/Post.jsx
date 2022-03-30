//CSS
import css from "./Post.module.css";

//IMPORTS
import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//CONTEXTS
import { PublicationsDataContext } from "../contexts/PublicationsContext";

//COMPONENTS
import Publication from "../Publication";
import Avatar from "../Avatar";

const Post = () => {
	const navigateTo = useNavigate();
	const { idPost } = useParams();
	const { publicaciones } = useContext(PublicationsDataContext);
	const [post, setPost] = useState({});

	useEffect(() => {
		if (publicaciones.length === 0) {
			return navigateTo("/");
		}
		const post = publicaciones.find(item => item._id === idPost);
		setPost(post);
	});

	return (
		<>
			<section className={css.default}>
				<Publication idPost={idPost} user={post.user} description={post.description} />
				{post.comments &&
					//COPIO EL ARRAY DE COMENTARIOS PARA PODER MODIFICARLO
					[...post.comments].reverse().map(item => (
						<article className={css.comment} key={item._id}>
							<span className={css.user}>
								<Avatar />
								{item.user_comment}
							</span>
							<span className={css.description}>{item.comment}</span>
						</article>
					))}
			</section>
		</>
	);
};

export default Post;
