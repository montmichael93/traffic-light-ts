import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const Lightoff = "circle black";
  const trafficLight = ["lets go!", "slow down", "stop"];
  const [lightIndex, setLightIndex] = useState(0);
  const currentLight = trafficLight[lightIndex];
  const lastLight = lightIndex === trafficLight.length - 1; // last in the array

  const nextLight = () => {
    lastLight ? setLightIndex(lightIndex - 2) : setLightIndex(lightIndex + 1);
  };

  return (
    <>
      <div className="traffic-light-box">
        <h2>Functional Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={
              currentLight === trafficLight[2] ? "circle red" : Lightoff
            }
          ></div>
          <div
            className={
              currentLight === trafficLight[1] ? "circle yellow" : Lightoff
            }
          ></div>
          <div
            className={
              currentLight === trafficLight[0] ? "circle green" : Lightoff
            }
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
