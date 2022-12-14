import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapBlogCardAvail } from "./hook/gsap";

const BlogCard = ({ blog }) => {
  const blogCardRef = useRef(null);
  const blogCardWrapRef = useRef(null);

  useGsapBlogCardAvail(blogCardRef, blogCardWrapRef);

  const image = blog.image;
  return (
    <div ref={blogCardWrapRef}>
      <div
        ref={blogCardRef}
        className="blog-card"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="blog-card-content-wrapper">
          <h2 className="blog-card-title">{blog.title}</h2>
          <p className="blog-card-description">{blog.body}</p>
          {/* <img src={blog.image} alt="" /> */}
          <Link className="blog-btn btn ">read more</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
