function Bloglist({ blogs, displayPost }) {
  const blogPosts = blogs.map; =>  (
    <li key={id} onClick={() => displayPost(id)}
  )
  ({ title, id });
}

export default BlogList;
