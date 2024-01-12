import { useState } from "react";
import "./App.css";
import tweets from "./tweets-x.json";
import Home from "./components/Home";
import Tweet from "./components/Tweet";
import Sidebar from "./components/Sidebar";

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
      <input type="text" />
    </div>
    
      {/* <Tweet
        author_avatar="src/assets/IMG-20231126-WA0007~2 (2).jpg"
        source="Glody"
        date="3 Jav"
        id="@glody"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quibusdam neque necessitatibus corrupti nostrum laboriosam vitae,
              non illo dignissimos reprehenderit. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ea nemo laborum cum tempore
              cupiditate. Nemo corrupti voluptatum veniam repellat repudiandae
              aliquid perspiciatis accusantium ab voluptates. Dolores ut ab
              fugiat quaerat?"
        image="src/assets/IMG-20231227-WA0069.jpg"
        replies="558"
        retweets="569"
        favorites="600"
      /> */}
      </div>
    </>
  );
}

export default App;
