import React from "react";
import { blogPosts } from "../../data/projects";
import ProjectCard from "../Projects/ProjectCard";
import Heading from "../Heading";
import SubHeading from "../SubHeading";

const BlogPosts = () => {
  const blogs = blogPosts.map((post, index) => {
    return (
      <ProjectCard
        description={post.description}
        index={index}
        project={post}
      />
    );
  });
  return (
    <div id="blog" className="max-w-[80%] mx-auto mt-16">
      <div>
        <SubHeading title="WRITING" />
        <Heading heading="My Blog Posts" />
      </div>
      {blogs}
    </div>
  );
};

export default BlogPosts;
