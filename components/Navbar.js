import React, { Component } from "react";
import Link from "next/link";
import { Link as StyledLink, Flex } from "rebass";

const NavLink = props => (
  <StyledLink
    p={5}
    fontSize={4}
    width={[1, 1, 1 / 2]}
    color="white"
    bg="magenta"
    {...props}
  />
);

const Navbar = () => (
  <div>
    <Link href="/blog" passHref>
      <NavLink>Blog</NavLink>
    </Link>
    <Link href="/projects" passHref>
      <NavLink>Projects</NavLink>
    </Link>
    <Link href="/" passHref>
      <NavLink>Home</NavLink>
    </Link>
    <Link href="/about" passHref>
      <NavLink>About</NavLink>
    </Link>
    <Link href="/contact" passHref>
      <NavLink>Contact</NavLink>
    </Link>
  </div>
);

export default Navbar;
