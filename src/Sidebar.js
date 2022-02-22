import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import SidebarOption from "./SidebarOption";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "@mui/material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="mainIcon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />{" "}
      {/*To make this active*/}
      <SidebarOption Icon={TagIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      {/* Tweet Button */}
      <Button variant="outlined" className="sidebarButton" fullWidth>
        {" "}
        {/*To make the button OUTLINED, and fullwidth*/}
        Tweet
      </Button>
    </div>
  );
}
