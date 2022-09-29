import BlogDisplay from "./BlogDisplay";
import BlogList from "./BlogList";
import { useState } from "react";

const INITIAL_BLOGS = [
  {
    title: "Hello World",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies sit amet turpis non condimentum. Suspendisse et justo venenatis, efficitur eros vitae, elementum libero. Pellentesque non ultricies lacus. Etiam sit amet nulla metus. Praesent quis volutpat tortor. Praesent pharetra, sapien non volutpat mattis, eros libero sagittis lectus, eget tristique turpis eros tempor ligula. Aenean dolor enim, varius ac porttitor et, hendrerit quis risus. Ut imperdiet nunc eu malesuada viverra. Quisque volutpat urna vitae neque facilisis, eget interdum mauris condimentum.",
    id: 1,
  },
  {
    title: "Hello World",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies sit amet turpis non condimentum. Suspendisse et justo venenatis, efficitur eros vitae, elementum libero. Pellentesque non ultricies lacus. Etiam sit amet nulla metus. Praesent quis volutpat tortor. Praesent pharetra, sapien non volutpat mattis, eros libero sagittis lectus, eget tristique turpis eros tempor ligula. Aenean dolor enim, varius ac porttitor et, hendrerit quis risus. Ut imperdiet nunc eu malesuada viverra. Quisque volutpat urna vitae neque facilisis, eget interdum mauris condimentum.",
    id: 2,
  },
  {
    title: "Hello World",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies sit amet turpis non condimentum. Suspendisse et justo venenatis, efficitur eros vitae, elementum libero. Pellentesque non ultricies lacus. Etiam sit amet nulla metus. Praesent quis volutpat tortor. Praesent pharetra, sapien non volutpat mattis, eros libero sagittis lectus, eget tristique turpis eros tempor ligula. Aenean dolor enim, varius ac porttitor et, hendrerit quis risus. Ut imperdiet nunc eu malesuada viverra. Quisque volutpat urna vitae neque facilisis, eget interdum mauris condimentum.",
    id: 3,
  },
];

function BlogReadingSite() {
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [blogPost, setBlogPost] = useState([]);
  const displayPost = (id) => {
    const index = blogs.findIndex((blog) => blog.id === id);
    const activeBlogPost = blogs[index];
    setBlogPost(activeBlogPost);
  };
  return (
    <div className="blog-reading-site">
      <BlogList blogs={blogs} displayPost={displayPost} />
      <BlogDisplay />
    </div>
  );
}
export default BlogReadingSite;
