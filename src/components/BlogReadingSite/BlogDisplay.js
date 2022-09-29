function BlogDisplay({ blogPost }) {
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
}

export default BlogDisplay;
