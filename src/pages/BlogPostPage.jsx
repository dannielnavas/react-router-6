import { useNavigate, useParams } from "react-router-dom";
import { BLOG_DATA } from "../BlogData";

const BlogPost = () => {
  const { slug } = useParams(); // obtener el slug de la URL
  const navigate = useNavigate();

  const post = BLOG_DATA.find((post) => post.slug === slug);

  const returnBlog = () => {
    // navigate(-1);
    navigate("/blog");
  };

  return (
    <>
      <button onClick={returnBlog}>Volver al blog</button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
    </>
  );
};

export { BlogPost };
