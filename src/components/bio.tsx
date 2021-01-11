/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 64, height: 64, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <div className="md:flex bg-white rounded-lg p-8 items-center">
      {avatar && (
        <div className="h-16 w-16 mb-4 md:mb-0 md:h-16 md:w-24 mx-auto md:mx-0 md:mr-2">
          <Image
            draggable={false}
            fixed={avatar}
            alt={author?.name || ``}
            className="rounded-full shadow-lg"
          />
        </div>
      )}
      {author?.name && (
        <div className="text-center md:text-left">
          <p className="text-lg text-blue-600">{author.name}</p>
          <p>{author?.summary || null}</p>
        </div>
      )}
    </div>
  );
};

export default Bio;
