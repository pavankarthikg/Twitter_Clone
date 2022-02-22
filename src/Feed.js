import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import PostRect from "./PostRect";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <PostRect />
    </div>
  );
}

export default Feed;
