import React from "react";
// Styles
import "../styles/Post.css";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import SendIcon from "@material-ui/icons/Send";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function Post({ id, username, description, postImage }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__headerAvatar" />
        <p className="post__headerUsername">{username}</p>
        <MoreHorizIcon />
      </div>
      <img className="post__image" src={postImage} alt="" />
      <div className="post__menu">
        <div className="post__navigation">
          <div className="post__navigationLeftSide">
            <FavoriteBorderIcon className="post__navigationLeftSideIcon" />
            <ChatBubbleOutlineOutlinedIcon className="post__navigationLeftSideIcon" />
            <SendOutlinedIcon className="post__navigationLeftSideIcon" />
          </div>
          <BookmarkBorderIcon />
        </div>
        <div className="post__comment">
          <p className="post__commentDescription">
            <span className="post__commentUsername">{username}</span>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
