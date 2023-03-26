import React from "react";
import Element from "./Element";

const Avatar = ({
  body,
  clothing1,
  clothing2,
  clothing3,
  mouth,
  nose,
  eyes,
  eyebrows,
  glasses,
  hair,
}) => {
  return (
    <div className="avatar">
      <Element layer="body" index={body} zIndex={0} />
      <Element layer="clothes/layer_1" index={clothing1} zIndex={2} />
      <Element layer="clothes/layer_2" index={clothing2} zIndex={3} />
      <Element layer="clothes/layer_3" index={clothing3} zIndex={4} />
      <Element layer="mouth" index={mouth} zIndex={1} />
      <Element layer="nose" index={nose} zIndex={1} />
      <Element layer="eyes" index={eyes} zIndex={1} />
      <Element layer="eyebrows" index={eyebrows} zIndex={1} />
      <Element layer="accessories/glasses" index={glasses} zIndex={2} />
      <Element layer="hair" index={hair} zIndex={4} />
    </div>
  );
};

export default Avatar;
