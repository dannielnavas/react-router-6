/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BLOG_DATA } from "../BlogData";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      {BLOG_DATA.map((post, index) => (
        <div key={index}>
          <BlogLink title={post.title} slug={post.slug} />
        </div>
      ))}
    </div>
  );
};

const BlogLink = ({ title, slug }) => {
  return (
    <div>
      <Link to={`/blog/${slug}`}>{title}</Link>
    </div>
  );
};

export { Blog };
