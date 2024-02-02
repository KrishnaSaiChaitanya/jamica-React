import React from "react";

const MapArea = () => {
  return (
    <div className="map mht">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485119.2169088095!2d-77.64989194895684!3d18.210204918501667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda2a1bc6cf719d%3A0x59a0d1c0b5120efa!2sJamaica!5e0!3m2!1sen!2sbd!4v1701518960943!5m2!1sen!2sbd"
        style={{ height: "100%", width: "100%" }}
        id="gmap_canvas"></iframe>
    </div>
  );
};

export default MapArea;
