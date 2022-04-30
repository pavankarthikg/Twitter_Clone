import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <div className="profile_box">
            <AccountCircleIcon />
          </div>
          <input placeholder="What's happening" type="text"></input>
        </div>
        <div className="TweetOptions">
          <div>
            <CollectionsIcon />
          </div>
          <div>
            <GifIcon />
          </div>
          <div>
            <PollIcon />
          </div>
          <div>
            <EmojiEmotionsIcon />
          </div>
          <div>
            <LocationOnIcon />
          </div>
        </div>

        <Button className="tweetboxbutton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
