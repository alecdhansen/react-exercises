import ListGroup from "react-bootstrap/ListGroup";

function BlogList({ blogs, displayPost }) {
  const blogPosts = blogs.map(({ title, id }) => (
    <div className="div3">
      <ListGroup.Item
        className="blog-list3"
        key={id}
        onClick={() => displayPost(id)}
      >
        {title}
      </ListGroup.Item>
    </div>
  ));
  return <ListGroup classname="ul">{blogPosts}</ListGroup>;
}

export default BlogList;
