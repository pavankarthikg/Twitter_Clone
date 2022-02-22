import { Avatar } from "@mui/material";
import React from "react";
import "./PostRect.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";

function PostRect({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="postRect">
      <div className="post_avatar">
        <Avatar src={require("./twitter-icon.png")}> </Avatar>
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              PK once said{" "}
              <span>
                <VerifiedOutlinedIcon className="verification_badge" />
                <p> @pawankarthik2</p>
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>I love double D's</p>
          </div>
        </div>
        <img
          src={require("./fight_club_poster.png")}
          alt="Fight Club Iconnic Dialogue"
        />
        <div className="post_footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          <RepeatOutlinedIcon fontSize="small" />
          <FavoriteBorderOutlinedIcon fontSize="small" />
          <PublishOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default PostRect;
