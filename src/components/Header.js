import React from "react";

// Styles
import "../styles/Header.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img
          className="header__homeLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="instagram home logo"
        />
        <div className="header_search">
          <SearchSharpIcon className="header__searchIcon" fontSize="small" />
          <input
            className="header__searchInput"
            placeholder="Search"
            type="text"
            autocapitalize="none"
          />
        </div>
        <div className="header__navigation">
          <HomeIcon className="header__navigationLink" />
          <SendOutlinedIcon className="header__navigationLink" />
          <FavoriteBorderIcon className="header__navigationLink" />
          <Avatar
            className="header__navigationAvatar"
            src="https://instagram.ffco2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/69880200_502738793890508_2462634230622978048_n.jpg?_nc_ht=instagram.ffco2-1.fna.fbcdn.net&_nc_ohc=YDcNRujLycoAX9eBWTJ&oh=1b9b5d162a212a7039ba301a5125837d&oe=5FACCE50"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
