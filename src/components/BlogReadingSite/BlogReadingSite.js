import BlogDisplay from "./BlogDisplay";
import BlogList from "./BlogList";
import { useState } from "react";

const INITIAL_BLOGS = [
  {
    title: "Hello World",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies sit amet turpis non condimentum. Suspendisse et justo venenatis, efficitur eros vitae, elementum libero. Pellentesque non ultricies lacus. Etiam sit amet nulla metus. Praesent quis volutpat tortor. Praesent pharetra, sapien non volutpat mattis, eros libero sagittis lectus, eget tristique turpis eros tempor ligula. Aenean dolor enim, varius ac porttitor et, hendrerit quis risus. Ut imperdiet nunc eu malesuada viverra. Quisque volutpat urna vitae neque facilisis, eget interdum mauris condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies sit amet turpis non condimentum. Suspendisse et justo venenatis, efficitur eros vitae, elementum libero. Pellentesque non ultricies lacus. Etiam sit amet nulla metus. Praesent quis volutpat tortor. Praesent pharetra, sapien non volutpat mattis, eros libero sagittis lectus, eget tristique turpis eros tempor ligula. Aenean dolor enim, varius ac porttitor et, hendrerit quis risus. Ut imperdiet nunc eu malesuada viverra. Quisque volutpat urna vitae neque facilisis, eget interdum mauris condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies sit amet turpis non condimentum. Suspendisse et justo venenatis, efficitur eros vitae, elementum libero. Pellentesque non ultricies lacus. Etiam sit amet nulla metus. Praesent quis volutpat tortor. Praesent pharetra, sapien non volutpat mattis, eros libero sagittis lectus, eget tristique turpis eros tempor ligula. Aenean dolor enim, varius ac porttitor et, hendrerit quis risus. Ut imperdiet nunc eu malesuada viverra. Quisque volutpat urna vitae neque facilisis, eget interdum mauris condimentum.",
    id: 1,
  },
  {
    title: "Good Morning, Vietnam",
    content:
      "Aliquam eget aliquet eros, sed pulvinar dui. Morbi nunc metus, semper quis dolor id, ultricies convallis massa. Duis at imperdiet dui. Aenean a nisi tempor, feugiat est non, pellentesque erat. Sed ac rutrum lacus. Morbi sed augue eget libero facilisis tincidunt nec in ligula. Nulla facilisi. Morbi vulputate lectus in tempor blandit. Fusce sapien sapien, placerat aliquam imperdiet eu, posuere sit amet ante. Curabitur eget egestas quam. Phasellus in ipsum ac orci posuere cursus quis sed purus. Donec nec turpis sit amet arcu mattis scelerisque. Nam elementum eget turpis nec ultrices. In condimentum libero sem, ut rhoncus elit sollicitudin at. Quisque nec placerat diam. Quisque luctus, tellus nec efficitur tincidunt, lacus nisi vestibulum ex, id lacinia turpis justo id arcu. Integer vel placerat quam. Nunc nec elit risus. Proin suscipit, massa sed pellentesque laoreet, justo ligula mollis felis, sit amet vestibulum dui sapien nec nisl. Vivamus sollicitudin eros ac est accumsan hendrerit. Quisque quis tortor sit amet leo lacinia tempus. Sed efficitur lectus et ligula venenatis fermentum. Aliquam sagittis semper lorem vitae imperdiet. Morbi nunc metus, semper quis dolor id, ultricies convallis massa. Duis at imperdiet dui. Aenean a nisi tempor, feugiat est non, pellentesque erat. Sed ac rutrum lacus. Morbi sed augue eget libero facilisis tincidunt nec in ligula. Nulla facilisi. Morbi vulputate lectus in tempor blandit. Fusce sapien sapien, placerat aliquam imperdiet eu, posuere sit amet ante. Curabitur eget egestas quam. Phasellus in ipsum ac orci posuere cursus quis sed purus. Donec nec turpis sit amet arcu mattis scelerisque. Nam elementum eget turpis nec ultrices. In condimentum libero sem rem.",
    id: 2,
  },
  {
    title: "Merry Christmas, Ya Filthy Animal",
    content:
      "Morbi nunc metus, semper quis dolor id, ultricies convallis massa. Duis at imperdiet dui. Aenean a nisi tempor, feugiat est non, pellentesque erat. Sed ac rutrum lacus. Morbi sed augue eget libero facilisis tincidunt nec in ligula. Nulla facilisi. Morbi vulputate lectus in tempor blandit. Fusce sapien sapien, placerat aliquam imperdiet eu, posuere sit amet ante. Curabitur eget egestas quam. Phasellus in ipsum ac orci posuere cursus quis sed purus. Donec nec turpis sit amet arcu mattis scelerisque. Nam elementum eget turpis nec ultrices. In condimentum libero sem, ut rhoncus elit sollicitudin at. Quisque nec placerat diam. Quisque luctus, tellus nec efficitur tincidunt, lacus nisi vestibulum ex, id lacinia turpis justo id arcu. Integer vel placerat quam. Nunc nec elit risus. Proin suscipit, massa sed pellentesque laoreet, justo ligula mollis felis, sit amet vestibulum dui sapien nec nisl. Vivamus sollicitudin eros ac est accumsan hendrerit. Quisque quis tortor sit amet leo lacinia tempus. Sed efficitur lectus et ligula venenatis fermentum. Aliquam sagittis semper lorem vitae imperdiet. Morbi nunc metus, semper quis dolor id, ultricies convallis massa. Duis at imperdiet dui. Aenean a nisi tempor, feugiat est non, pellentesque erat. Sed ac rutrum lacus. Morbi sed augue eget libero facilisis tincidunt nec in ligula. Nulla facilisi. Morbi vulputate lectus in tempor blandit. Fusce sapien sapien, placerat aliquam imperdiet eu, posuere sit amet ante. Curabitur eget egestas quam. Phasellus in ipsum ac orci posuere cursus quis sed purus. Donec nec turpis sit amet arcu mattis scelerisque. Nam elementum eget turpis nec ultrices. In condimentum libero sem rem.  Donec ultricies sit amet turpis non condimentum.",
    id: 3,
  },
];

function BlogReadingSite() {
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [blogPost, setBlogPost] = useState();
  const displayPost = (id) => {
    const index = blogs.findIndex((blog) => blog.id === id);
    const activeBlogPost = blogs[index];
    setBlogPost(activeBlogPost);
  };
  return (
    <div className="blog-reading-site">
      <BlogList blogs={blogs} displayPost={displayPost} />
      {blogPost && <BlogDisplay blogPost={blogPost} />}
    </div>
  );
}
export default BlogReadingSite;
