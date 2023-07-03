import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [lightIndex, setLightIndex] = useState(0);

  const nextLight = () => {
    lightIndex === 2
      ? setLightIndex(lightIndex - 2)
      : setLightIndex(lightIndex + 1);
  };

  return (
    <>
      <div className="traffic-light-box">
        <h2>Functional Traffic Light</h2>
        <div className="traffic-light">
          <div
            className={lightIndex === 2 ? "circle red" : "circle black"}
          ></div>
          <div
            className={lightIndex === 1 ? "circle yellow" : "circle black"}
          ></div>
          <div
            className={lightIndex === 0 ? "circle green" : "circle black"}
          ></div>
        </div>
        <button
          onClick={() => {
            nextLight();
          }}
          className="next-state-button"
        >
          Next State
        </button>
      </div>
    </>
  );
};
