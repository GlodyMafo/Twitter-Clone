import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "./Btn";
import "./profil.css";
import Tweet from "./Tweet";

export default function Profil(props) {


  const [posts, setPost] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        setPost(response.data);
      });
  }, []);


  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((resp) => {
        setUsers(resp.data);
      });
  }, []);
 

  return (
    <>
      <div className="profil">
        <div className="navProfil">
        <Link className="link-style" to="/">
          <img 
            className="navProfil--icon"
            src="src/assets/Icons/retour.png"
            alt=""
          />
          </Link>
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
      </div>
      <div className="menu_content">
      {posts.map((post) => (
                  <Tweet
                    key={post.id}
                    author_avatar={
                      users.find((x) => x.id === post.userId)?.thumbnailProfil
                    }
                    source={users.find((x) => x.id === post.userId)?.name}
                    id={post.id}
                    text={post.body}
                    image={post.url}
                    replies={post.replies}
                    retweets={post.repost}
                    favorites={post.like}
                  />
                ))}
        </div>
    </>
  );
}
