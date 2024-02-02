import React, { useEffect, useState } from "react";

const Loader = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div id={Loading ? "loading-overlay" : "loading-overlay d-none"}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
