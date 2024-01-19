import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import tweets from "./tweets-x.json";
import Home from "./components/Home";
import Tweet from "./components/Tweet";
import Sidebar from "./components/Sidebar-left";
import SidebarRright from "./components/Sidebar-right";
import Profil from "./components/Profil";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Home/>
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
// <RouterProvider router={router}/>
// )

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="disposition">
        <div className="side-left">
          <Sidebar />
        </div>
        <Routes>
          <Route path="/profil" element={<Profil />} />
        </Routes>
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
          <SidebarRright />
        </div>
      </div>
    </>
  );
}

export default App;
