import React, { Component } from "react";
import Link from "next/link";

const Navbar = () => (
  <div>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <Link href="/projects">
      <a>Projects</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </div>
);

export default Navbar;
