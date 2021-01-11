import React from "react";
import { kebabCase } from "lodash";

import DateDisplay from "../DateDisplay";
import Tag from "../Tag";

const PostsList = ({ posts }) => (
  <>
    {posts.map((post) => {
      const title = post.frontmatter.title || post.fields.slug;

      return (
        <li key={post.fields.slug}>
          <article
            className="container mx-auto mt-16"
            itemScope
            itemType="http://schema.org/Article" // TechArticle, NewsArticle, BlogPosting
          >
            <header>
              <h1 itemProp="headline">
                <div className="text-3xl text-center text-gray-700">
                  <a
                    className="px-2 hover:bg-gray-700 hover:text-white"
                    href={`/posts${post.fields.slug}`}
                  >
                    {title}
                  </a>
                </div>
              </h1>
              <div className="mt-2 flex flex-row justify-center items-center">
                <DateDisplay className="mr-4" date={post.frontmatter.date} />
                {(post.frontmatter.tags || []).map((name) => (
                  <Tag
                    key={name}
                    name={name}
                    link={`/tags/${kebabCase(name)}/`}
                  />
                ))}
              </div>
            </header>
            <section
              itemProp="articleBody"
              className="mx-auto mt-2 prose prose-blue lg:prose-lg"
            >
              <p itemProp="description">
                {post.frontmatter.description || post.excerpt}
              </p>
            </section>
          </article>
        </li>
      );
    })}
  </>
);

export default PostsList;
