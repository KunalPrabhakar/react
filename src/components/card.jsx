import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

export const Card = ({ post }) => {
  const { delPost } = useContext(PostListContext);
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="del" onClick={() => delPost(post.id)}>
        <MdDeleteOutline />
      </div>

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="tagContainer">
          {post.tags.map((tag) => (
            <span href="#" key={tag} className="btn btn-primary tags">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
