import "./App.css";
import { useState } from "react";
import BlogPostForm from "./components/BlogPost/BlogPostForm";
import ContactList from "./components/ContactListApp/ContactList";
import BlogReadingSite from "./components/BlogReadingSite/BlogReadingSite";
import BookmarkApp from "./components/BookmarkApp/BookmarkApp";
import BlogCMS from "./components/BlogCMS/BlogCMS";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [page, setPage] = useState("a");
  let content;
  if (page === "a") {
    content = <BlogPostForm />;
  } else if (page === "b") {
    content = <ContactList />;
  } else if (page === "c") {
    content = <BlogReadingSite />;
  } else if (page === "d") {
    content = <BookmarkApp />;
  } else if (page === "e") {
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
              onClick={() => setPage("a")}
            >
              BlogPostForm(a)
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("b")}
            >
              ContactList(b)
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("c")}
            >
              BlogReadingSite(c)
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("d")}
            >
              BookmarkApp(d)
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("e")}
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
