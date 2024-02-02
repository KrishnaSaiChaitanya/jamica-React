import React from "react";

const SingleBlogArea = () => {
  return (
    <section id="main-single">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="block-single">
              <article className="post-single">
                <div className="featured-post">
                  <div className="image-post">
                    <img src="/images/blog/15.jpg" alt="" />
                  </div>
                </div>
                <div className="post-title">
                  <h4>
                    What To Do if Your Rental Car Has Met With An Accident
                  </h4>
                  <ul>
                    <li className="author">
                      <a href="#">
                        <img src="/images/icon/author.png" alt="" />
                        Ali Tufan
                      </a>
                    </li>
                    <li className="date">
                      <a href="#">
                        <img src="/images/icon/date.png" alt="" />
                        January 18, 2017
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="post-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    Idque Caesaris facere voluntate liceret: sese habere. Magna
                    pars studiorum, prodita quaerimus. Magna pars studiorum,
                    prodita quaerimus. Fabio vel iudice vincam, sunt in culpa
                    qui officia. Vivamus sagittis lacus vel augue laoreet rutrum
                    faucibus. Nulla vitae elit libero, a pharetra augue.
                  </p>
                  <p>
                    Nihilne te nocturnum praesidium Palati, nihil urbis
                    vigiliae. Non equidem invideo, miror magis posuere velit
                    aliquet. Qui ipsorum lingua Celtae, nostra Galli
                    appellantur. Prima luce, cum quibus mons aliud consensu ab
                    eo. Petierunt uti sibi concilium totius Galliae in diem
                    certam indicere.
                  </p>
                  <blockquote>
                    <span>“</span>
                    <p>
                      Cum sociis natoque penatus etaed pnis dis parturient
                      montes, scettr aieo ridus mus. Etiam portaem mley
                    </p>
                    <div className="author">
                      <span className="name">Ali TUFAN </span>
                      <span className="option"> - Envato Author</span>
                    </div>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    efficitur rutrum diam, ut commodo ipsum elementum ac. Duis
                    quis iaculis purus, eget mattis urna. Quisque consectetur
                    odio ac ante fermentum malesuada. Nullam eget lectus
                    euismod, rutrum quam quis, venenatis ligula. Integer egestas
                    elit ipsum. Vivamus nec egestas turpis, et semper neque.
                    Pellentesque ac nisl feugiat, blandit mauris ut,
                    sollicitudin quam. Vivamus vestibulum est scelerisque mi
                    tempus fermentum. Vestibulum sed orci cursus, dictum nisl
                    nec, iaculis tellus.
                  </p>
                </div>
              </article>
              <div className="direction">
                <div className="tags">
                  <span>Tags:</span>
                  <a href="#">Business Trips</a>, <a href="#">Los Angeles</a>,
                  <a href="#">Luxury</a>,<a href="#">Service</a>
                </div>
                <div className="share">
                  <span>Share:</span>
                  <a href="#" title="Facebook">
                    {/* <i className="fa fa-facebook" aria-hidden="true"></i> */}
                    <svg class="icon">
                      <use xlinkHref="/icons.svg#icon-facebook100"></use>
                    </svg>
                  </a>
                  <a href="#" title="Twitter">
                    <svg class="icon">
                      <use xlinkHref="/icons.svg#icon-twitter"></use>
                    </svg>
                    {/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
                  </a>
                  <a href="#" title="Instagram">
                    <svg class="icon">
                      <use xlinkHref="/icons.svg#icon-instagram"></use>
                    </svg>
                    {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                  </a>
                  <a href="#" title="Pinterest">
                    <svg class="icon">
                      <use xlinkHref="/icons.svg#icon-pinterest"></use>
                    </svg>
                    {/* <i className="fa fa-pinterest" aria-hidden="true"></i> */}
                  </a>
                  <a href="#" title="Dribble">
                    <svg class="icon">
                      <use xlinkHref="/icons.svg#icon-dribbble"></use>
                    </svg>
                    {/* <i className="fa fa-dribbble" aria-hidden="true"></i> */}
                  </a>
                  <a href="#" title="Google">
                    <svg class="icon">
                      <use xlinkHref="/icons.svg#icon-google"></use>
                    </svg>
                    {/* <i className="fa fa-google" aria-hidden="true"></i> */}
                  </a>
                </div>
              </div>
              <div className="nav-single">
                <ul>
                  <li className="prev">
                    <a href="#">
                      <div className="icon">
                        <img src="/images/icon/prev.png" alt="" />
                      </div>
                      <div className="text">
                        <h4>Previous Post</h4>
                        <p>
                          Getting Started Designing Apps for the Apple Watch
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="next">
                    <a href="#">
                      <div className="icon">
                        <img src="/images/icon/next.png" alt="" />
                      </div>
                      <div className="text">
                        <h4>Next Post</h4>
                        <p>
                          Getting Started Designing Apps for the Apple Watch
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="comment-single">
                <div id="comment-area">
                  <h4>02 Comments</h4>
                  <ul className="comment-list">
                    <li className="comment">
                      <div className="avatar">
                        <img src="/images/blog/comment-01.jpg" alt="" />
                      </div>
                      <div className="comment-content">
                        <div className="name">
                          Daniel Vandaft -
                          <span className="date">
                            December 3, 2017 at 7:24 pm
                          </span>
                        </div>
                        <p>
                          Comment example here. Nulla risus lacus, vehicula id
                          mi vitae, auctor accumsan nulla. Sed a luptatem accuse
                          doloremque laudantium mi quam. Lorem In euismod urna
                          ac massa adipiscing interdum.
                        </p>
                        <div className="reply">
                          <a href="#">
                            <i className="fa fa-reply" aria-hidden="true"></i>
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment">
                      <div className="avatar">
                        <img src="/images/blog/comment-02.jpg" alt="" />
                      </div>
                      <div className="comment-content">
                        <div className="name">
                          Vanessa Elina -
                          <span className="date">
                            December 3, 2017 at 7:24 pm
                          </span>
                        </div>
                        <p>
                          Comment example here. Nulla risus lacus, vehicula id
                          mi vitae, auctor accumsan nulla. Sed a luptatem accuse
                          doloremque laudantium mi quam. Lorem In euismod urna
                          ac massa adipiscing interdum.
                        </p>
                        <div className="reply">
                          <a href="#">
                            <i className="fa fa-reply" aria-hidden="true"></i>
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="form-comment-area">
                  <h4>Leave a Reply</h4>
                  <form action="#" method="get" accept-charset="utf-8">
                    <div className="comment-form">
                      <div className="comment-form-name one-half">
                        <label id="first-name">First Name</label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          placeholder="Ali"
                        />
                      </div>
                      <div className="comment-form-email one-half">
                        <label id="first-name">Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="creativelayer088@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="comment-form">
                      <label>Comment</label>
                      <textarea name="comment" placeholder="Ali"></textarea>
                    </div>
                    <div className="btn-submit">
                      <button type="submit" className="waves-effect">
                        Post Comment
                        <img src="/images/icon/right-3.png" alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sidebar">
              <div className="widget widget-search">
                <form action="#" method="get" accept-charset="utf-8">
                  <div className="input-search">
                    <input
                      type="text"
                      name="search"
                      placeholder="Type keywords..."
                    />
                    <button type="submit">
                      <img src="/images/icon/search.png" alt="" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="widget widget-category">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="#" title="">
                      <img src="/images/icon/next.png" alt="" />
                      Business Trips
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <img src="/images/icon/next.png" alt="" />
                      Drivers
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <img src="/images/icon/next.png" alt="" />
                      Limousine
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <img src="/images/icon/next.png" alt="" />
                      Los Angeles
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <img src="/images/icon/next.png" alt="" />
                      Luxury Cars
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <img src="/images/icon/next.png" alt="" />
                      Transport
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-news">
                <h3>Latest News</h3>
                <ul>
                  <li>
                    <div className="news-image">
                      <img src="/images/blog/news-01.jpg" alt="" />
                    </div>
                    <div className="news-content">
                      <h6>
                        <a href="#" title="">
                          New Shuttle Train Service
                        </a>
                      </h6>
                      <p className="date">22.05.2017</p>
                    </div>
                  </li>
                  <li>
                    <div className="news-image">
                      <img src="/images/blog/news-02.jpg" alt="" />
                    </div>
                    <div className="news-content">
                      <h6>
                        <a href="#" title="">
                          Brooklyn Airport Service
                        </a>
                      </h6>
                      <p className="date">22.05.2017</p>
                    </div>
                  </li>
                  <li>
                    <div className="news-image">
                      <img src="/images/blog/news-03.jpg" alt="" />
                    </div>
                    <div className="news-content">
                      <h6>
                        <a href="#" title="">
                          New Shuttle Train Service
                        </a>
                      </h6>
                      <p className="date">22.05.2017</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget-tags">
                <h3>Tags</h3>
                <ul>
                  <li>
                    <a href="#" title="">
                      Business Trips
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Long Distance Travel
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Los Angeles
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Luxury
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      New York
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogArea;
