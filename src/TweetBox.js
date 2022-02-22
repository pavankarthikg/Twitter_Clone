import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src={require("./twitter-icon.png")}></Avatar>
          <input placeholder="What's happening" type="text"></input>
        </div>
        <input
          className="tweetbox_input_image"
          placeholder="Upload an image"
          type="text"
        ></input>

        <Button className="tweetboxbutton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
