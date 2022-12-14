import React, { useRef } from "react";
import {
  useGsapShowMoon,
  useGsapHeroTitleUnvail,
  useGsapShutterUnvail2,
  useGsapShutterParagraphUnvail,
  useGsapButtonUnvail,
} from "./hook/gsap";

const Hero = () => {
  const heroShutter1Ref = useRef(null);
  const heroShutter2Ref = useRef(null);
  const heroRef = useRef(null);
  const moonRef = useRef(null);
  const heroShutterParagraphRef = useRef(null);
  const buttonRef = useRef(null);

  useGsapHeroTitleUnvail(heroShutter1Ref, heroRef, 0.5);
  useGsapShutterUnvail2(heroShutter2Ref, heroRef, 0.7);
  useGsapShowMoon(moonRef, heroRef);
  useGsapShutterParagraphUnvail(heroShutterParagraphRef, heroRef, 1.6);
  useGsapButtonUnvail(buttonRef, heroRef, 2);

  return (
    <section className="hero" ref={heroRef}>
      <div className="wrapper">
        <div className="hero__wrapper">
          <div className="hero-left">
            <h1 className="hero-h1-f" ref={heroShutter1Ref}>
              The 7 wonders of
              {/* <span className="hero-shutter1"></span> */}
            </h1>
            <h1 className="hero-h1-l" ref={heroShutter2Ref}>
              the solar system
              {/* <span className="hero-shutter2"></span> */}
            </h1>
            <p className="hero-desc" ref={heroShutterParagraphRef}>
              Most of us can only name a few of the seven wonders of the world,
              but historians, archaeologists, and pub quizzers can
            </p>
            <div ref={buttonRef}>
              <button className="btn read-more">read more &rarr;</button>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://i.gifer.com/b2M.gif" alt="" ref={moonRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
