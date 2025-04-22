import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
      if (!Array.isArray(posts)) {
    console.error("Error", posts);
    return null;
  }

  return (
    <main>
      {posts.map(post => (
        <Article key={post.id} title={post.title} content={post.content} />
      ))}
    </main>
  );
};

export default ArticleList;