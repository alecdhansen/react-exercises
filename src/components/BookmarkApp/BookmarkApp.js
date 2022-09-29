import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";

const INITIAL_STATE = {
  url: "",
  tag: "",
  title: "",
};

function BookmarkApp() {
  const [bookmark, setBookmark] = useState(INITIAL_STATE);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [filter, setFilter] = useState();
  const handleInput = (e) => {
    setBookmark({ ...bookmark, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBookmarkList([...bookmarkList, bookmark]);
    setBookmark(INITIAL_STATE);
  };
  const bookmarksHTML = bookmarkList
    .filter((bookmark) => (filter ? bookmark.tag === filter : bookmark))
    .map((bookmark, index) => (
      <>
        <ListGroup className="listgroup4">
          <ListGroup.Item key={index}>
            <a href={bookmark.url}>{bookmark.title}</a>
          </ListGroup.Item>
        </ListGroup>
      </>
    ));
  const filterTags = (e) => {
    if (e.target.value === "all") {
      setFilter(null);
    } else {
      setFilter(e.target.value);
    }
  };
  const tagList = [...new Set(bookmarkList.map((bookmark) => bookmark.tag))];
  const tagListHTML = tagList.map((tag, index) => (
    <Button key={index} value={tag} onClick={filterTags} className="btn2-4">
      {tag}
    </Button>
  ));
  return (
    <div className="div4">
      <Form onSubmit={handleSubmit} className="form4">
        <InputGroup className="mb-3">
          <InputGroup.Text id="url" className="inputs2">
            Url
          </InputGroup.Text>
          <Form.Control
            name="url"
            type="url"
            required
            value={bookmark.url}
            onChange={handleInput}
            placeholder="Enter url..."
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="title" className="inputs2">
            Title
          </InputGroup.Text>
          <Form.Control
            name="title"
            type="text"
            required
            value={bookmark.title}
            onChange={handleInput}
            placeholder="Enter title..."
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="tag" className="inputs2">
            Tag Word
          </InputGroup.Text>
          <Form.Control
            name="tag"
            type="text"
            required
            value={bookmark.tag}
            onChange={handleInput}
            placeholder="Enter tag..."
          />
        </InputGroup>
        <Button variant="success" className="btn2" type="submit">
          Submit
        </Button>
      </Form>
      <div className="filter4">
        <p>Filter by Tag:</p>
        <Button onClick={filterTags} value="all" className="btn1-4">
          All
        </Button>
        {tagListHTML}
      </div>
      <div>{bookmarksHTML}</div>
    </div>
  );
}
export default BookmarkApp;
