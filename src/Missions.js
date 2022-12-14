import React, { useRef } from "react";
import MissionCard from "./MissionCard";
import { FaMercury, FaSpaceShuttle } from "react-icons/fa";
import { TbZodiacGemini } from "react-icons/tb";
import {
  useGsapMissionCard,
  useGsapMissionDescription,
  useGsapTitleUnvail,
} from "./hook/gsap";

const missionArr = [
  {
    id: 1,
    icon: FaMercury,
    title: "Project Mercury",
    description:
      "Project Mercury was the first human spaceflight program of the United States, running from 1958 through 1963. An early highlight of",
  },
  {
    id: 2,
    icon: TbZodiacGemini,
    title: "Project Gemini",
    description:
      "Project Gemini was NASA's second human spaceflight program. Conducted between projects Mercury and Apollo,",
  },
  {
    id: 3,
    icon: FaSpaceShuttle,
    title: "International Space Station",
    description:
      "The International Space Station (ISS) is the largest modular space station currently in low Earth orbit. It is a multinational",
  },
];
const Missions = () => {
  const missionCardWrapperRef = useRef(null);
  const missionRef = useRef(null);
  const missionTitleRef = useRef(null);
  const missionDescriptionRef = useRef(null);

  useGsapMissionCard(missionCardWrapperRef, missionRef);
  useGsapTitleUnvail(missionTitleRef, missionRef);
  useGsapMissionDescription(missionDescriptionRef, missionRef);

  return (
    <section className="missions" ref={missionRef}>
      <div className="wrapper">
        <div className="mission-title">
          <h2 className="section-title" ref={missionTitleRef}>
            Every Mission to the Moon, Ever
          </h2>
          <p ref={missionDescriptionRef}>
            It only takes a couple days to send most spacecraft to the Moon, so
            it's not surprising that humans have sent more missions there than
            anywhere else. The Moon is also the only celestial body besides
            Earth where humans have visited.
          </p>
        </div>
        <div className="card-wrapper" ref={missionCardWrapperRef}>
          {missionArr.map((mission) => (
            <MissionCard mission={mission} key={mission.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
