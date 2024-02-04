import CommonHero from "@/components/commonHero";
import React from "react";
import BlogArea from "@/components/blog/blogArea";

const Blog = () => {
  return (
    <div className="blog-page">
      <CommonHero
        title="BLOG"
        subtitle="Latest news from Prodirve"
        pageName="Blog"
      />
      <BlogArea />
    </div>
  );
};

export default Blog;
