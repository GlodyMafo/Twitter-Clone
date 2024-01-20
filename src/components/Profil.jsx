import Button from "./Btn";
import "./profil.css";

export default function Profil() {
  return (
    <>
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
    </>
  );
}
