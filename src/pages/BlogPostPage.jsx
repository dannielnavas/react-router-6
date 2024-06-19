import { useParams } from "react-router-dom";
import { BLOG_DATA } from "../BlogData";

const BlogPost = () => {
  const { slug } = useParams(); // obtener el slug de la URL

  const post = BLOG_DATA.find((post) => post.slug === slug);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
    </>
  );
};

export { BlogPost };
