import React from "react";

const ElementList = ({
  numberOfElements,
  path,
  set,
  selected,
  zoom = 1,
  top = "50%",
}) => {
  let parts = [];
  for (let i = 0; i < numberOfElements; i++) {
    const x = (
      <div
        key={path + i}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
        onClick={() => set(i)}
      >
        <img
          src={`character/${path}/${i + 1}.png`}
          alt=""
          height={50 * zoom}
          className="img-center"
          style={{ top }}
        />
      </div>
    );
    parts.push(x);
  }
  return <div className="list">{parts}</div>;
};

export default ElementList;
