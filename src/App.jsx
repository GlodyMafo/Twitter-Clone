import { useState } from "react";
import "./App.css";
import tweets from "./tweets-x.json";
import Home from "./components/Home";
import Tweet from "./components/Tweet";
import Sidebar from "./components/Sidebar-left";
import SidebarRright from "./components/Sidebar-right";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="disposition">
      <div className="side-left">
      <Sidebar/>
      </div>
    
    <div className="home-app">
    <Home />
      {tweets.map((item) => (
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
      ))}
    </div>
    <div className="side-right">
   <SidebarRright/>
    </div>
      </div>
    </>
  );
}

export default App;
