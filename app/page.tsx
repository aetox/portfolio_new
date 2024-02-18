"use client";
import Image from "next/image";
import React from "react";
import LikeButton from "./like-button";

import { Alert } from "flowbite-react";
import NavBar from "./navbar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
}

function HomePage() {
  return <div></div>;
}
