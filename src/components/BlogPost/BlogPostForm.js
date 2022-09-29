import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  title: "",
  content: "",
};

function BlogPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogPost, setBlogPost] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogPost = {
      id: nanoid(),
      title,
      content,
    };
    setBlogPost([...blogPost, newBlogPost]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="blog-post-form">
      <h2 className="h2-1">Submit your blog!</h2>

      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="title" className="inputs1">
            Blog Title
          </InputGroup.Text>
          <Form.Control
            placeholder="Blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="body" className="inputs1">
            Blog Content
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Add blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
          />
        </InputGroup>
        <Button variant="success" className="btn1" type="submit">
          Add Blog
        </Button>
      </Form>
    </div>
  );
}
export default BlogPostForm;
