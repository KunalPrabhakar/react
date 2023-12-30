import { useReducer } from "react";
import { createContext } from "react";
const DefaultContext = {
  postList: [],
  addPost: () => {},
  delPost: () => {},
};
export const PostListContext = createContext(DefaultContext);
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, tagsarray) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        tags: tagsarray,
      },
    });
  };
  const delPost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, delPost }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "GOING TO MUMBAI",
    body: "Sure thing! Are you looking for general information on travel blogs, or do you have a specific question about them? Travel blogs often contain personal experiences, tips, itineraries, and recommendations for various destinations.",
    userId: "user-9",
    tags: ["vacation", "Mumbai"],
  },
  {
    id: "2",
    title: "Shopping complete",
    body: "Sure thing! Are you looking for a specific type of shopping blog, like fashion, home decor, gadgets, or something else? The world of shopping blogs is pretty vast!",
    userId: "user-10",
    tags: ["Delhi", "Shopping"],
  },
];
export default PostListProvider;
