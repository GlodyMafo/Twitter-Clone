import Button from "./Btn";
import "./home.css"

export default function Home (){
    return(

    <>
    <section className="home">
    {/* *******************Navigation*************************** */}
    <div className="nav">
      <h1>Home</h1>
      <img src="src/assets/Icons/Timeline-Prop.svg" alt="" />
    </div>

    {/* *******************************Main************************** */}

    <div className="main">
      <img
        className="profile"
        src="src/assets/_MG_4654_083242-removebg-preview.png"
        alt=""
      />
      <div>
       
          <p>What's happening?</p>
          
          <div className="main-content">
          <div className="main-icons">
            <img src="src/assets/Icons/Media.svg" alt="" />
            <img src="src/assets/Icons/Gif.svg" alt="" />
            <img src="src/assets/Icons/Poll.svg" alt="" />
            <img src="src/assets/Icons/Emoji.svg" alt="" />
            <img src="src/assets/Icons/Schedule.svg" alt="" />
            </div>
            <div>
            <Button name="tweet" />
            </div>
          </div>
           


      </div>
    </div>

  </section>
    </>

    )
    
}