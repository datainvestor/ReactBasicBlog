import React from "react";
import BlogContext from "../../context/BlogContext";
import PostPreview from "./PostPreview";
import { useContext } from "react";

const postListStyle = {
  display: "flex",
  padding: "20px",
  boxSizing: "border-box",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

function PostList({ isAdmin }) {
  const { postData, isLoading } = useContext(BlogContext);

  if (!isLoading && (!postData || postData.length === 0)) {
    return <p>No Posts Yet</p>;
  }

  let postPreviewList = postData.map((item, index) => {
    return (
      <PostPreview
        key={index}
        id={item.id}
        thumbnail={item.thumbnailLink}
        title={item.title}
        previewText={item.content}
        isAdmin={isAdmin}
      />
    );
  });
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section style={postListStyle}>{postPreviewList}</section>
  );
}

export default PostList;
