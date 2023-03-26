import { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import ElementList from "./components/ElementList";
const total = {
  body: 17,
  eyes: 24,
  hair: 73,
  nose: 1,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [nose, setNose] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [eyebrows, setEyebrows] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);

  const [displayBody, setDisplayBody] = useState(1);
  const [displayEyes, setDisplayEyes] = useState(0);
  const [displayHair, setDisplayHair] = useState(0);
  const [displayNose, setDisplayNose] = useState(0);
  const [displayMouth, setDisplayMouth] = useState(0);
  const [displayEyebrows, setDisplayEyebrows] = useState(0);
  const [displayGlasses, setDisplayGlasses] = useState(0);
  const [displayClothing1, setDisplayClothing1] = useState(0);
  const [displayClothing2, setDisplayClothing2] = useState(0);
  const [displayClothing3, setDisplayClothing3] = useState(0);

  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    // Only 1 nose - no need to randomize
    // setNose(Math.floor(Math.random() * total.nose));
    setMouth(Math.floor(Math.random() * total.mouth));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };

  const handleHide = () => {
    setDisplayBody(0);
    setDisplayEyes(0);
    setDisplayHair(0);
    setDisplayNose(0);
    setDisplayMouth(0);
    setDisplayEyebrows(0);
    setDisplayGlasses(0);
    setDisplayClothing1(0);
    setDisplayClothing2(0);
    setDisplayClothing3(0);
  };

  const handleDisplay = (x) => {
    handleHide();
    x(1);
  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="App">
      <div className="title">CUSTOMIZE YOUR CHARACTER!</div>
      <div className="divider"></div>
      <div className="main">
        <div>
          {/* Avatar result */}
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              nose={nose}
              mouth={mouth}
              eyebrows={eyebrows}
              glasses={glasses}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
            />
          </div>
        </div>
        {/* List elements */}
        {/* Button row */}
        <div>
          <button
            className={displayBody ? "clicked button" : "button"}
            onClick={() => {
              handleDisplay(setDisplayBody);
            }}
          >
            Body
          </button>
          <button
            className={displayEyes ? "clicked button" : "button"}
            onClick={() => handleDisplay(setDisplayEyes)}
          >
            Eyes
          </button>{" "}
          <button
            className={displayHair ? "clicked button" : "button"}
            onClick={() => handleDisplay(setDisplayHair)}
          >
            Hair
          </button>{" "}
          <button
            className={displayNose ? "clicked button" : "button"}
            onClick={() => handleDisplay(setDisplayNose)}
          >
            Nose
          </button>
          <button
            className={displayMouth ? "clicked button" : "button"}
            onClick={() => handleDisplay(setDisplayMouth)}
          >
            Mouth
          </button>
          <button
            className={displayEyebrows ? "clicked button" : "button"}
            onClick={() => handleDisplay(setDisplayEyebrows)}
          >
            Eyebrows
          </button>
          <button
            className={displayGlasses ? "clicked button" : "button"}
            onClick={() => handleDisplay(setDisplayGlasses)}
          >
            Glasses
          </button>
          <button
            className={displayClothing1 ? "clicked button" : "button"}
            onClick={() => handleDisplay(setDisplayClothing1)}
          >
            Clothing (1)
          </button>
          <button
            className={displayClothing2 ? "clicked button" : "button"}
            onClick={() => handleDisplay(setDisplayClothing2)}
          >
            Clothing (2)
          </button>
          <button
            className={displayClothing3 ? "clicked button" : "button"}
            onClick={() => handleDisplay(setDisplayClothing3)}
          >
            Clothing (3)
          </button>
          <br></br>
          <span style={{ color: "rgb(6, 113, 86)", fontWeight: "bold" }}>
            Tired of choosing?
          </span>
          <button id="randomize-button" onClick={() => randomize()}>
            RANDOMIZE!
          </button>
          {/* Element table */}
          <div className={`list-section ${!displayBody ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.body}
              path="body"
              set={setBody}
              selected={body}
            />
          </div>
          <div className={`list-section ${!displayEyes ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.eyes}
              path="eyes"
              set={setEyes}
              selected={eyes}
              zoom={2.5}
              top="35px"
            />
          </div>
          <div className={`list-section ${!displayHair ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.hair}
              path="hair"
              set={setHair}
              selected={hair}
            />
          </div>
          <div className={`list-section ${!displayNose ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.nose}
              path="nose"
              set={setNose}
              selected={nose}
              zoom={2.5}
            />
          </div>
          <div className={`list-section ${!displayMouth ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.mouth}
              path="mouth"
              set={setMouth}
              selected={mouth}
              zoom={2.5}
            />
          </div>
          <div className={`list-section ${!displayEyebrows ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.eyebrows}
              path="eyebrows"
              set={setEyebrows}
              selected={eyebrows}
              zoom={2}
              top="35px"
            />
          </div>
          <div className={`list-section ${!displayGlasses ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.glasses}
              path="accessories/glasses"
              set={setGlasses}
              selected={glasses}
            />
          </div>
          <div className={`list-section ${!displayClothing1 ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.clothing1}
              path="clothes/layer_1"
              set={setClothing1}
              selected={clothing1}
            />
          </div>
          <div className={`list-section ${!displayClothing2 ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.clothing2}
              path="clothes/layer_2"
              set={setClothing2}
              selected={clothing2}
            />
          </div>
          <div className={`list-section ${!displayClothing3 ? "none" : ""}`}>
            <ElementList
              numberOfElements={total.clothing3}
              path="clothes/layer_3"
              set={setClothing3}
              selected={clothing3}
              zoom={2}
              top="-15px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
