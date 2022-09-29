import Alert from "react-bootstrap/Alert";

function BlogDisplay({ blogPost }) {
  return (
    <Alert variant="success" className="div33">
      <Alert.Heading>{blogPost.title}</Alert.Heading>
      <p>{blogPost.content}</p>
    </Alert>
  );
}

export default BlogDisplay;
