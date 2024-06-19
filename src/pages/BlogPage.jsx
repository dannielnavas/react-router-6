/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import { BLOG_DATA } from "../BlogData";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>

      <Outlet />

      {BLOG_DATA.map((post) => (
        <div key={post.slug}>
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
