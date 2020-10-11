import React from "react";

// Styles
import "../styles/SuggestionAccount.css";
import { Avatar } from "@material-ui/core";

function SuggestionAccount({ id, username, followInfo, profilePhotoURL }) {
  return (
    <div>
      <div className="sidebar__suggestionsBody">
        <Avatar
          className="sidebar__suggestionsBody__avatar"
          src={profilePhotoURL}
        />
        <div className="sidebar__suggestionsBody__info">
          <p className="sidebar__suggestionsBody__infoUsername">{username}</p>
          <p className="sidebar__suggestionsBody__followInfo">{followInfo}</p>
        </div>
        <button className="sidebar__suggestionBody__followButton">
          Follow
        </button>
      </div>
    </div>
  );
}

export default SuggestionAccount;
