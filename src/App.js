import "./App.css";
import { useState } from "react";
import BlogPostForm from "./components/BlogPost/BlogPostForm";
import ContactListForm from "./components/ContactListForm/ContactListForm";
import BlogReadingSite from "./components/BlogReadingSite/BlogReadingSite";
import BookmarkApp from "./components/BookmarkApp/BoomarkApp";
import BlogCMS from "./components/BlogCMS/BlogCMS";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [page, setPage] = useState("BlogPostForm");
  let content;
  if (page === "BlogPostForm") {
    content = <BlogPostForm />;
  } else if (page === "ContactListForm") {
    content = <ContactListForm />;
  } else if (page === "BlogReadingSite") {
    content = <BlogReadingSite />;
  } else if (page === "BookmarkApp") {
    content = <BookmarkApp />;
  } else if (page === "BlogCMS") {
    content = <BlogCMS />;
  }

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="title">
            React Exercises
          </Navbar.Brand>
          <Nav className="me-auto">
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("BlogPostForm")}
            >
              BlogPostForm(a)
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("ContactListForm")}
            >
              ContactListForm(b)
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("BlogReadingSite")}
            >
              BlogReadingSite(c)
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("BookmarkApp")}
            >
              BookmarkApp(d)
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("BlogCMS")}
            >
              BlogCMS(e)
            </Button>{" "}
          </Nav>
        </Container>
      </Navbar>
      {content}
    </div>
  );
}

export default App;
