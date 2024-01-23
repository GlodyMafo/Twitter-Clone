import Button from "./Btn";
import FollowingProposition from "./FollowingProposition";
import "./profil.css";

export default function Profil() {
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
            Glody Mafo <br /> <span className="posts">20 posts</span>
          </h1>
        </div>
        <div className="cover">
          <img
            className="cover-img"
            src="src/assets/images/codes-programmation-personne-afro-americaine-pour-serveur-pare-feu-ordinateur-programmeur-noir-utilisant-interface-codage-code-binaire-pour-developpement-sites-web-homme-afro-americain-travaillant-donnees (5).jpg"
            alt=""
          />
          <div className="avatar">
            <img
              className="profil-avatar"
              src="src/assets/images/_MG_4654_083242.png"
              alt=""
            />
          </div>
          <Button name="Edit Profile" class="EditProfil" />
        </div>
        <div className="profil-info">
          <h3 className="user">
            Glody Mafo <br /> <span className="posts">@glodymafo</span>{" "}
          </h3>
          <p>Mon attitude</p>
          <p className="posts">Joined April 2021</p>
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
