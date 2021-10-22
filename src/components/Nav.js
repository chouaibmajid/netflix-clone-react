import React from "react";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./nav.scss"

function Nav() {
const [navBlack , setNavBlack] = useState(false);
const[toggle,setToggle] = useState(false);

const ToggleFunc = () => {

  setToggle(!toggle);
  console.log(toggle);
}

const FuncScroll = () => {

window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)

}

useState (() => {
  window.addEventListener('scroll' , FuncScroll);

})  


    
  return (
    <div className={`nav ${navBlack &&"nav__black"} ${toggle &&"nav__black show"} `}>
      <button className="nav__burger"
      onClick={ToggleFunc}
      >
       
        <MenuIcon />{" "}
      </button>
      <img src="./images/logo.png" className="nav__logo" alt="Netflix" />
      <nav className="nav__links">
        <a href="/" className="nav__link">
          {" "}
          Accueil
        </a>

        <a href="/" className="nav__link">
          {" "}
          Séries
        </a>

        <a href="/" className="nav__link">
          {" "}
          Films
        </a>
      </nav>

      <div className="nav__actions">
        <a href="/" className="nav__action">
          {" "}
          <SearchIcon />
        </a>
        <a href="/" className="nav__action">
          {" "}
          Direct
        </a>
        <a href="/" className="nav__action">
          {" "}
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
          {" "}
          <NotificationsIcon />
        </a>
        <a href="/" className="nav__action">
          <img src="./images/avatar.jpg" alt="avatar" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
