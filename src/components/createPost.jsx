import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

export function CreatePost() {
  const { addPost } = useContext(PostListContext);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value;
    const tagsarray = tags.split(" ");
    addPost(userId, postTitle, postBody, tagsarray);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <form className="formSetting" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="Enter ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="Create a new post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postContent" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="5"
          className="form-control"
          id="postContent"
          placeholder="Add its content"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter #TAGS here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
          placeholder="Reach out with #tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
