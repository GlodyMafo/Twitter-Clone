import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import axios from "axios";
import "./App.css";
import tweets from "./tweets-x.json";
import Home from "./components/Home";
import Tweet from "./components/Tweet";
import Sidebar from "./components/Sidebar-left";
import SidebarRright from "./components/Sidebar-right";
import Profil from "./components/Profil";
uuidv4()

function App() {
  const [posts, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  // const [newPost,setNewPost]=useState([])

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
      .then((res) => {
        setUsers(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users/1")
      .then((resp) => {
        setUser(resp.data);
      });
  }, []);
  // const addPost=posting=>{
  //   setPost([...posts,{id: uuidv4(), act: posting, completed:false}])
  //   console.log(posts);
  // }
 

  return (
    <>
      <div className="disposition">
        <div className="side-left">
          <Sidebar
            userAvatar={user.profil}
            pseudo={user.name}
            userName={user.username}
          />
        </div>
        <Routes>
          <Route
            path="/profil"
            element={
              <div className="home-app">
                <Profil
                  key={user.id}
                  userAvatar={user.profil}
                  pseudo={user.name}
                  username={user.username}
                  number="25"
                  coverPicture={user.thumbnailProfil}
                  joined={user.Joined}
                />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="home-app">
                <Home userAvatar={user.profil} />

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
                {/* {tweets.map((item) => (
                  <Tweet
                    author_avatar={item.author_avatar}
                    source={item.source}
                    id={item.id}
                    text={item.text}
                    image={item.image}
                    replies={item.replies}
                    retweets={item.retweets}
                    favorites={item.favorites}
                  />
                ))} */}
              </div>
            }
          />
        </Routes>

        <div className="side-right">
          <SidebarRright />
        </div>
      </div>
    </>
  );
}

export default App;
