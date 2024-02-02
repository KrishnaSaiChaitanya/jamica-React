import React from "react";

const TempleteTitle = ({
  title = "Our Services",
  secTitle = "Our Services",
  subtitle = "Our aim is to fill a gap in niche market of Trade",
}) => {
  return (
    <section className="template-title has-over">
      <div className="container">
        <h3 className="title">{title}</h3>
        <span className="title_over">{secTitle}</span>
        <p className="subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default TempleteTitle;
