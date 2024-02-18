"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Alert } from "flowbite-react";
import NavBar from "./navbar";

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(subtitleRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <h1 ref={titleRef}>Title</h1>
      <h2 ref={subtitleRef}>Subtitle</h2>
      <Image
        ref={imageRef}
        src="/path/to/image.jpg"
        alt="Image"
        width={500}
        height={300}
      />
    </div>
  );
}

function HomePage() {
  return <div></div>;
}
