import React, { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import tweets from "./tweets-x.json";
import Home from "./components/Home";
import Tweet from "./components/Tweet";
import Sidebar from "./components/Sidebar-left";
import SidebarRright from "./components/Sidebar-right";
import Profil from "./components/Profil";

function App() {

const [post, setPost]=useState([]);

useEffect(() => {
  axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
  .then(response => {
  setPost(response.data)
  })
});
console.log(post);

  return (
    <>
      <div className="disposition">
        <div className="side-left">
          <Sidebar />
        </div>
        <Routes>
          <Route
            path="/profil"
            element={
              <container className="home-app">
                <Profil />
              </container>
            } />
          <Route
            path="/"
            element={
              <container className="home-app">
                <Home />
                {post.map((item) => (
                  <Tweet
                    author_avatar={item.thumbnailUrl}
                    source={item.userId}
                    id={item.id}
                    text={item.body}
                    image={item.url}
                    replies={item.replies}
                    retweets={item.repost}
                    favorites={item.like}
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
              </container>
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
