import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import { Card } from "./card";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <>
      <div className="postList">
        {postList.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
export default PostList;
