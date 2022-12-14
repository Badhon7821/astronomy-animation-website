import React, { useRef } from "react";
import BlogCard from "./BlogCard";
import { useGsapGalleryTitleShutter } from "./hook/gsap";

const blogData = [
  {
    id: 1,
    title:
      "Explore Scientific Eyepieces, Telescopes, Microscopes & STEM Supply",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_MkcoMQEwL85TGWfYexOmUxdNijZVN_k6p1Ev44JwA7mGl9XM5RCAIaFmw4_hBXW9C4&usqp=CAU",
  },
  {
    id: 2,
    title:
      "UCF Researchers Develop Groundbreaking New Rocket-Propulsion System",
    body: "Mach 5 explosions create bursts of energy that travel 4,500 to 5,600 miles per hour, which is more than five times the speed of sound. They are contained within a durable engine body constructed of copper and brass.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtpMBy5uHDFMXln-f31fllXzPwHyh-XcR1w&usqp=CAU",
  },
  {
    id: 3,
    title: "Spaceport in a box",
    body: "The UK has never sent a rocket into space from home turf. Every British satellite currently in orbit has left the planet from foreign soil — often blasting off from somewhere in America, or Kourou in French Guiana, or Baikonur Cosmodrome in Kazakhstan.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vKAhcr4CmuTLKDSk96J7UKwpZyNoCQpg_gj1z5K_VBVgWV5DpGKC8lP_zhtECpLW91A&usqp=CAU",
  },
  {
    id: 4,
    title: "About the Telescope",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://cdn.shopify.com/s/files/1/0390/6029/files/FL-80640-iEXOS_Banner_1120x469_crop_center.jpg?v=1645194794",
  },
  {
    id: 5,
    title: "Aussie Rocket Launch",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UuSXdtq5vKyP19J8U9nAAxSSo96v9m9t5g&usqp=CAU",
  },
  {
    id: 6,
    title: "Vaya Space- Smallsat Launch and Hybrid Rocket Engines",
    body: "Our name signifies our progress to date. We were remarkably successful in our research and development, allowing us to be mission ready and prepared to meet the demand of commercial launch that the SmallSat industry needs. ",
    image:
      "https://static.wixstatic.com/media/90f743_3455d25aad2c42e786cabe31317111bd~mv2.png/v1/fill/w_2500,h_1655,al_c/90f743_3455d25aad2c42e786cabe31317111bd~mv2.png",
  },
  {
    id: 7,
    title:
      "UCF Researchers Develop Groundbreaking New Rocket-Propulsion System",
    body: "Rotating detonation rocket engines will allow upper stage rockets for space missions to become lighter, travel farther and burn more cleanly.",
    image: "https://www.ucf.edu/news/files/2020/04/rocket_for_web.jpg",
  },
  {
    id: 8,
    title:
      "ZHIZUKA Telescope Zoom 90X HD Focus Astronomical Refractor with Portable Tripod Stand. F36050M High Power TeleScope Gift for Kids, Adults, Beginners",
    body: "Zhizuka astronomical zoom telescope Zhizuka astronomical zoom telescope Telescope with a maximum magnification by about 90X times is designed to show",
    image: "https://m.media-amazon.com/images/I/71drT9LRxLL._SY355_.jpg",
  },
];

const Blog = () => {
  const blogTitleRef = useRef(null);
  const blogTitleShutterRef = useRef(null);

  useGsapGalleryTitleShutter(blogTitleRef, blogTitleShutterRef);

  return (
    <section ref={blogTitleShutterRef} className="blog">
      <h2 className="section-title" ref={blogTitleRef}>
        blog
      </h2>
      <div className="wrapper blog-wrapper">
        {blogData.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
