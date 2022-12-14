import React, { useRef } from "react";
import {
  useGsapGalleryPhotoUnveil,
  useGsapGalleryTitleShutter,
  useGsapPhotoDropping,
} from "./hook/gsap";

const Gallery = () => {
  const galleryImgRef1 = useRef(null);
  const galleryImgRef2 = useRef(null);
  const galleryImgRef3 = useRef(null);
  const galleryImgRef4 = useRef(null);
  const galleryImgRef5 = useRef(null);
  const galleryImgRef6 = useRef(null);
  const galleryImgRef7 = useRef(null);
  const galleryImgRef8 = useRef(null);
  const galleryImgRef9 = useRef(null);
  const galleryImgRef10 = useRef(null);
  const galleryImgRef11 = useRef(null);
  const galleryImgRef12 = useRef(null);
  const galleryTitleRef = useRef(null);
  const galleryRef = useRef(null);
  const wrapGalleryTitle = useRef(null);

  const imgArr = [
    galleryImgRef1,
    galleryImgRef2,
    galleryImgRef3,
    galleryImgRef4,
    galleryImgRef5,
    galleryImgRef6,
    galleryImgRef7,
    galleryImgRef8,
    galleryImgRef9,
    galleryImgRef10,
    galleryImgRef11,
    galleryImgRef12,
  ];

  useGsapGalleryPhotoUnveil(imgArr, galleryRef);
  useGsapGalleryTitleShutter(galleryTitleRef, galleryRef);

  return (
    <section className="gallery">
      <div className="wrapper" ref={galleryRef}>
        <h2 ref={galleryTitleRef} className="section-title">
          gallery
          {/* <span ref={wrapGalleryTitle} className="gallery-shutter"></span> */}
        </h2>
        <div className="gallery-wrapper">
          <div className="horizontal">
            <img
              ref={galleryImgRef1}
              src="https://images.pexels.com/photos/1275413/pexels-photo-1275413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="vertical">
            <img
              ref={galleryImgRef2}
              src="https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="horizontal">
            <img
              ref={galleryImgRef3}
              src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          <div className="squre">
            <img
              ref={galleryImgRef4}
              src="https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          <div className="horizontal">
            <img
              ref={galleryImgRef5}
              src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="horizontal">
            <img
              ref={galleryImgRef6}
              src="https://images.pexels.com/photos/11737041/pexels-photo-11737041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="squre">
            <img
              ref={galleryImgRef7}
              src="https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="horizontal">
            <img
              ref={galleryImgRef8}
              src="https://images.pexels.com/photos/1276314/pexels-photo-1276314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="squre">
            <img
              ref={galleryImgRef9}
              src="https://images.pexels.com/photos/821644/pexels-photo-821644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="vertical">
            <img
              ref={galleryImgRef10}
              src="https://images.pexels.com/photos/355931/pexels-photo-355931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="horizontal-sm">
            <img
              ref={galleryImgRef11}
              src="https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="horizontal-sm">
            <img
              ref={galleryImgRef12}
              src="https://images.pexels.com/photos/5428304/pexels-photo-5428304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
