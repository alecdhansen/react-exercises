import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function BlogDetail({ blog, ...props }) {
  const [isEditing, setEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState({ ...blog });

  const cancelEdit = () => {
    setEditing(false);
    setEditedBlog({ ...blog });
  };

  const handleSave = () => {
    props.updateBlog(editedBlog);
    setEditing(false);
  };

  const previewTemplate = (
    <li>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <Button
        type="button"
        variant="success"
        className="btn2-5"
        onClick={() => setEditing(true)}
      >
        Edit
      </Button>
      <Button
        variant="success"
        type="button"
        className="btn2-5"
        onClick={() => props.removeBlog(blog.id)}
      >
        Delete
      </Button>
    </li>
  );

  const editTemplate = (
    <li className="col-md-12 li5">
      <label className="edit-spacer">Title</label>
      <input
        className="edit-spacer"
        type="text"
        name="title"
        value={editedBlog.title}
        onChange={(e) =>
          setEditedBlog({ ...editedBlog, [e.target.name]: e.target.value })
        }
      />
      <label className="edit-spacer">Body</label>
      <textarea
        className="edit-spacer"
        rows={10}
        cols={40}
        name="body"
        value={editedBlog.body}
        onChange={(e) =>
          setEditedBlog({ ...editedBlog, [e.target.name]: e.target.value })
        }
      />
      <Button
        type="button"
        variant="success"
        className="btn2-5 edit-spacer"
        onClick={handleSave}
      >
        Save
      </Button>
      <Button
        type="button"
        variant="success"
        className="btn2-5 edit-spacer"
        onClick={cancelEdit}
      >
        Cancel
      </Button>
    </li>
  );

  return (
    <Alert variant="success" className="detail-div5">
      <ul>{isEditing ? editTemplate : previewTemplate} </ul>
    </Alert>
  );
}

export default BlogDetail;
