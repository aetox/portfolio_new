"use client";
import Image from "next/image";
import React from "react";
import LikeButton from "./like-button";

import { Alert } from "flowbite-react";
import NavBar from "./navbar";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </>
  );
}

function HomePage() {
  return (
    <div>
      <LikeButton />
      <Alert color="info">Alert!</Alert>
    </div>
  );
}
