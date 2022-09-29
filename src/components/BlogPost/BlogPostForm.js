import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  title: "",
  blogContent: "",
};

function BlogPostForm() {
  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogPost, setBlogPost] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogPost = {
      id: nanoid(),
      title,
      blogContent,
    };
    setBlogPost([...blogPost, newBlogPost]);
  };

  const clearInputs = () => {
    setTitle("");
    setBlogContent("");
  };
  return (
    <div className="blog-post-form">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" className="inputs1">
            Blog Title
          </InputGroup.Text>
          <Form.Control
            placeholder="Blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" className="inputs1">
            Blog Content
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="Add blog content here..."
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
          />
        </InputGroup>
        <Button
          variant="success"
          className="btn1"
          type="submit"
          onClick={() => clearInputs()}
        >
          Add Blog
        </Button>
      </Form>
    </div>
  );
}
export default BlogPostForm;
