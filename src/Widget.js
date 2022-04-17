import React from "react";
import "./Widget.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widget() {
  return (
    <div className="widget">
      <div className="widget_input">
        <SearchIcon className="widget_searchIcon" />
        <input placeholder="Search Twitter" type="text"></input>
      </div>
      <div className="widget_widgetContainer">
        <h3>What's happening</h3>
        <TwitterTweetEmbed tweetId="1500740461115461632" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="PawanKalyan"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={
            "https://www.goodreads.com/en/book/show/56326808-when-the-sky-and-the-land-meet"
          }
          options={{ text: "My debut novel is awesome", via: "pawankarthik2" }}
        />
      </div>
    </div>
  );
}

export default Widget;
