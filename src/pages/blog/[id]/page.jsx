import React from "react";
import CommonHero from "../../../components/commonHero";
import SingleBlogArea from "../../../components/blog/singleBlogArea";

const SingleBlog = () => {
  return (
    <div className="single-blog-page">
      <CommonHero
        title="BLOG SINGLE"
        subtitle="Latest news from Prodirve"
        pageName="Blog Single"
      />
      <SingleBlogArea />
    </div>
  );
};

export default SingleBlog;
