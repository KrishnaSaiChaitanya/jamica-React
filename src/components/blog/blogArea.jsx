import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blogData = {
  btns: [
    "All",
    "Drivers",
    "Limousine",
    "Los Angeles",
    "Luxury Cars",
    "Transport",
  ],
  content: [
    {
      id: 1,
      img: "/images/blog/03.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Luxury Cars", "Transport"],
    },
    {
      id: 2,
      img: "/images/blog/04.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Limousine", "Luxury Cars"],
    },
    {
      id: 3,
      img: "/images/blog/05.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Limousine", "Luxury Cars"],
    },
    {
      id: 4,
      img: "/images/blog/03.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Los Angeles", "Transport"],
    },
    {
      id: 5,
      img: "/images/blog/04.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Los Angeles", "Luxury Cars"],
    },
    {
      id: 6,
      img: "/images/blog/05.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Los Angeles", "Luxury Cars", "Transport"],
    },
    {
      id: 7,
      img: "/images/blog/03.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Luxury Cars", "Transport"],
    },
    {
      id: 8,
      img: "/images/blog/04.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Limousine", "Los Angeles", "Transport"],
    },
  ],
};

const BlogArea = () => {
  const [filtered, setFiltered] = useState(blogData.content);
  const [blogTab, setBlogTab] = useState("All");

  useEffect(() => {
    const filterdContent = blogData.content.filter((item) =>
      item.categories.includes(blogTab)
    );
    setFiltered(filterdContent);
  }, [blogTab]);

  return (
    <section id="main-post" className="ver-1">
      <div className="container">
        <div className="row">
          <div className="block-post">
            <ul className="tab-post">
              {blogData.btns.map((title, i) => {
                return (
                  <li
                    className={blogTab == title ? "active" : ""}
                    data-filter="*"
                    key={i}
                    onClick={() => setBlogTab(title)}
                  >
                    {title}
                  </li>
                );
              })}
            </ul>
            <motion.div layout className="post-grid grid">
              <AnimatePresence>
                {filtered.map((item) => {
                  const { id, title, img, desc, author, date, url } = item;
                  return (
                    <motion.article
                      style={{ overflow: "hidden" }}
                      key={id}
                      layout
                      transition={{
                        ease: "linear",
                        duration: 0.3,
                      }}
                      initial={{ transform: "scale(0.2)" }}
                      animate={{ transform: "scale(1)" }}
                      exit={{ transform: "scale(0.2)" }}
                      className="post ipsotope transport limousine"
                    >
                      <div className="featured-image">
                        <img src={img} alt={title} />
                      </div>
                      <div className="entry-content">
                        <div className="entry-post-title">
                          <h4 className="post-title">
                            <a href={url}>{title}</a>
                          </h4>
                        </div>
                        <ul>
                          <li className="author">
                            <a href="#">
                              <img src="/images/icon/author.png" alt="" />
                              {author}
                            </a>
                          </li>
                          <li className="date">
                            <a href="#">
                              <img src="/images/icon/date.png" alt="" />
                              {date}
                            </a>
                          </li>
                        </ul>
                        <p>{desc}</p>
                        <div className="btn-readmore">
                          <a href={url}>
                            Read More
                            <img src="images/icon/right-2.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="pagination-area ver-1">
              <ul>
                <li className="prev">
                  <a href="#" className="waves-effect" title="">
                    <img src="images/icon/prev.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" className="waves-effect" title="">
                    1
                  </a>
                </li>
                <li className="active">
                  <a href="#" className="waves-effect" title="">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" className="waves-effect" title="">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" className="waves-effect" title="">
                    ...
                  </a>
                </li>
                <li>
                  <a href="#" className="waves-effect" title="">
                    22
                  </a>
                </li>
                <li className="next">
                  <a href="#" className="waves-effect" title="">
                    <img src="images/icon/next.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
