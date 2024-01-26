import React, { useState, useEffect} from "react";
import axios from "axios";
import Button from "./Btn";
import "./profil.css";
import Tweet from "./Tweet";

export default function Profil(props) {

  const [posts, setPost] = useState([]);
  const[user,setUser]=useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/user")
      .then((res) => {
        setUser(res.data);
      });
  });

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        setPost(response.data);
      });
  });

  const findUser=user.filter((User)=>(User.id==user[0])) 

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
                      user.find((x) => x.id === post.userId)?.thumbnailProfil
                    }
                    source={user.find((x) => x.id === post.userId)?.name}
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
