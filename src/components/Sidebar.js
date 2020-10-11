import React from "react";
import { Link } from "react-router-dom";

// Components
import SuggestionAccount from "./SuggestionAccount";
// Styles
import "../styles/Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          className="sidebar__headerAvatar"
          src="https://instagram.ffco2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/69880200_502738793890508_2462634230622978048_n.jpg?_nc_ht=instagram.ffco2-1.fna.fbcdn.net&_nc_ohc=YDcNRujLycoAX9eBWTJ&oh=1b9b5d162a212a7039ba301a5125837d&oe=5FACCE50"
        />
        <div className="sidebar__headerTitle">
          <p className="sidebar__headerTitleUsername">imsamuelbenkecalabresi</p>
          <p className="sidebar__headerTitleName">𝐒𝐀𝐌𝐔𝐄𝐋 𝐁𝐄𝐍𝐊𝐄 𝐂𝐀𝐋𝐀𝐁𝐑𝐄𝐒𝐈</p>
        </div>
      </div>
      <div className="sidebar__suggestions">
        <div className="sidebar__suggestionsHeader">
          <h3>Suggestions For You</h3>
          <button>See all</button>
        </div>

        <SuggestionAccount
          id="123454345435"
          profilePhotoURL="https://instagram.ffco2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/110879518_871001779972996_5750048612346551229_n.jpg"
          username="cantodeglispiriti"
          followInfo="Followed by labenkeyoga + 1 more"
        />
        <SuggestionAccount
          id="123454345436"
          profilePhotoURL=""
          username="mirtime95"
          followInfo="Follows you"
        />
        <SuggestionAccount
          id="123454345437"
          profilePhotoURL=""
          username="celineguepin"
          followInfo="Followed by _cri_tex_ + 1 more"
        />
        <SuggestionAccount
          id="123454345438"
          profilePhoto=""
          username="gloriadellamanna"
          followInfo="Follows you"
        />
      </div>
      <div className="sidebar__footer">
        <ul className="sidebar__footerLinks">
          <div>
            <li className="sidebar__footerLink">About</li>
            <li className="sidebar__footerLink">Help</li>
            <li className="sidebar__footerLink">Press</li>
            <li className="sidebar__footerLink">API</li>
            <li className="sidebar__footerLink">About</li>
            <li className="sidebar__footerLink">Jobs</li>
            <li className="sidebar__footerLink">Privacy</li>
            <li className="sidebar__footerLink">Terms</li>
          </div>
          <div>
            <li className="sidebar__footerLink">Locations</li>
            <li className="sidebar__footerLink">Top Accounts</li>
            <li className="sidebar__footerLink">Hashtags</li>
            <li className="sidebar__footerLink">Language</li>
          </div>
        </ul>
      </div>
      <p>
        <span class="sidebar__footerDINPA">© 2020 Instagram from Facebook</span>
      </p>
    </div>
  );
}

export default Sidebar;
