import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapMenuStagger = (itemArr, trig, delay = 0) => {
  useEffect(() => {
    const el = itemArr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: Expo.easeIn,
        delay: delay,
        scrollTrigger: {
          start: "top center",
          end: "bottom 10%",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapLogoStruger = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "200%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          start: "top center",
          end: "bottom 10%",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapHeroTitleUnvail = (item, trig, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100vw",
        scale: 0,
      },
      {
        x: 0,
        scale: 1,
        duration: 1.5,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          start: "top center",
          end: "bottom 10%",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapShutterParagraphUnvail = (item, trig, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        delay: delay,
        ease: Expo.easeIn,
        scrollTrigger: {
          start: "top center",
          end: "bottom 10%",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, {});
};

export const useGsapButtonUnvail = (item, trig, delay) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "200%",
        opacity: 0,
      },
      {
        x: 0,
        duration: 1.5,
        opacity: 1,
        ease: Expo.easeIn,
        delay: delay,
        scrollTrigger: {
          start: "top center",
          end: "bottom 10%",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapShutterUnvail2 = (item, trig, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: "-100vw",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 2.5,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          start: "top center",
          end: "bottom 10%",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

//rocket move

export const useGsapRocketLeftToRight = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-300vw",
      },
      {
        x: "100vw",
        duration: 4,
        stagger: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapShowMoon = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapTitleUnvail = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        trigger: 0.5,
        scrollTrigger: {
          trigger: trig.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapMissionDescription = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-200%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.8,
        ease: Expo.easeInOut,
        trigger: 0.5,
        scrollTrigger: {
          trigger: trig.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapMissionCard = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "60%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: trig.current,
          start: "top 80%",
          // end: "bottom 100%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useCardShutterAveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 0.8,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapGalleryTitleShutter = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.2,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapGalleryPhotoUnveil = (itemArr, trig) => {
  useEffect(() => {
    const el = itemArr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "150%",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapBlogCardAvail = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "60%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        trigger: 0.5,
        scrollTrigger: {
          trigger: trig.current,
          start: "top 80%",
          // end: "bottom 100%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapFooterTitleAveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 0.6,
      }
    );
  }, []);
};

export const useGsapFooterMenu = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      }
    );
  }, []);
};

export const useGsapFooterRight = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
      }
    );
  }, []);
};
