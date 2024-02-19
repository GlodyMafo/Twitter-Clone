import React, { useState, useEffect } from "react";
import Button from "./Btn";
import "./home.css";

export default function Home(props) {
  const [valueTweet, setValueTweet] = useState("");
  const [valueImg, setValueImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

     console.log(valueTweet);
    console.log(valueImg);

    setValueTweet("");
  };
  return (
    <>
      <section className="home">
        {/* *******************Navigation*************************** */}
        <div className="nav">
          <h1>Home</h1>
          <img src="src/assets/Icons/Timeline-Prop.svg" alt="" />
        </div>

        {/* *******************************Main************************** */}
        <form onSubmit={handleSubmit}>
          <div className="main">
            <span className="main-intro">
              <img className="Home-avatar" src={props.userAvatar} />
              <textarea
                className="intro-msg"
                cols="45"
                rows="auto"
                placeholder="What is happening?"
                onChange={(e) => setValueTweet(e.target.value)}
                value={valueTweet}
              ></textarea>
            </span>
          </div>

          <div>
            <div className="main-content">
              <div className="main-icons">
                <div className="filebutton">
                  <span title="Media">
                    <input
                      type="file"
                      accept="image/x-png, image/gif, image/jpeg"
                      id="myfile"
                      name="myfile"
                      className="btn-input"
                      onChange={(e) => setValueImg(e.target.value)}
                    />
                  </span>
                </div>

                <div className="giftbutton">
                  <span title="GIFT">
                    <input
                      type="button"
                      accept="image/gif"
                      id="myfile"
                      name="myfile"
                      className="btn-input"
                    />
                  </span>
                </div>

                <div className="pollbutton">
                  <span title="Poll">
                    <input
                      type="button"
                      accept="image/gif"
                      id="myfile"
                      name="myfile"
                      className="btn-input"
                    />
                  </span>
                </div>

                <div className="emojibutton">
                  <span title="Emoji">
                    <input
                      type="button"
                      accept="image/gif"
                      id="myfile"
                      name="myfile"
                      className="btn-input"
                    />
                  </span>
                </div>

                <div className="schedulebutton">
                  <span title="Schedule">
                    <input
                      type="button"
                      accept="image/gif"
                      id="myfile"
                      name="myfile"
                      className="btn-input"
                    />
                  </span>
                </div>
              </div>
              <div>
                <Button type="submit" name="Tweet" class="Home-btn" />
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
