import React from "react";

const Element = ({ layer, index, zIndex }) => {
  return (
    <img
      src={`character/${layer}/${index}.png`}
      alt=""
      width={250}
      // Nếu dùng component thì mình nên để in line style như này ạ?
      style={{ zIndex, position: "absolute" }}
    />
  );
};

export default Element;
