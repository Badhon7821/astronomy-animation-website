import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCardShutterAveil } from "./hook/gsap";

const MissionCard = ({ mission }) => {
  const cardShutterRef = useRef(null);
  const cardRef = useRef(null);
  useCardShutterAveil(cardShutterRef, cardRef);

  const Icon = mission.icon;
  console.log(mission.icon);
  return (
    <div className="card" ref={cardRef}>
      <div className="card-icon">
        <Icon />
      </div>
      <div className="card-title">
        <h3>{mission.title}</h3>
      </div>
      <div className="card-des">
        <p>{mission.description}</p>
      </div>
      <Link>read more &rarr;</Link>

      <span ref={cardShutterRef} className="card-shutter"></span>
    </div>
  );
};

export default MissionCard;
