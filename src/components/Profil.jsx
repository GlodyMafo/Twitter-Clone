import React, { useState, useEffect} from "react";
import axios from "axios";
import Button from "./Btn";
import FollowingProposition from "./FollowingProposition";
import "./profil.css";

export default function Profil(props) {

  const [user, setuser]=useState({});
  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users")
    .then(response => {
    setPost(response.data)
    })
  });
  console.log(user);

  return (
    <>
      <div className="profil">
        <div className="navProfil">
          <img 
            className="navProfil--icon"
            src="src/assets/Icons/retour.png"
            alt=""
          />
          <h1 className="user">
            {props.pseudo} <br /> <span className="posts">{props.number} Posts</span>
          </h1>
        </div>
        <div className="cover">
          <img
            className="cover-img"
            src={props.coverPicture}
          />
          <div className="avatar">
            <img
              className="profil-avatar"
              src={props.userAvatar}
              // src="src/assets/images/_MG_4654_083242.png"
              // alt=""
            />
          </div>
          <Button name="Edit Profile" class="EditProfil" />
        </div>
        <div className="profil-info">
          <h3 className="user">
          {props.pseudo} <br /> <span className="posts">@{props.username}</span>{" "}
          </h3>
          <p>Mon attitude</p>
          <p className="posts"> {props.joined} </p>
          <div className="followers">
            <p>
              {" "}
              <span>130</span> Following
            </p>
            <p>
              {" "}
              <span>500</span> Followers
            </p>
          </div>
        </div>

        <div className="menu">
          <p>Posts</p>
          <p>Replies</p>
          <p>Hightlihts</p>
          <p>Media</p>
          <p>Like</p>
        </div>
        <div className="menu_content">
          <h3>Who to follow</h3>
          <FollowingProposition />
          <p>Lorem ipsum dolor sit amet.</p>
          <FollowingProposition />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, iure!
          <FollowingProposition />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <FollowingProposition />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eius
          asperiores!
        </div>
      </div>
    </>
  );
}
