import React from "react";

const CommonHero = ({
  title = "FLEET",
  subtitle = "Choose Your Dream Car From Among Six Different Categories",
  pageName = "Fleet",
}) => {
  return (
    <section className="top-title">
      <div className="top-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="top-page-heading">
                <h1>{title}</h1>
                <p className="sub-title">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <a href="/">Home </a>
                </li>
                <li>/ {pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
