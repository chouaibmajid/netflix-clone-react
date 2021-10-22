import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from '@material-ui/icons/Instagram';
import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__socials">
          <a href="/" className="footer__link">
            {" "}
            <FacebookIcon />{" "}
          </a>
          <a href="/" className="footer__link">
            {" "}
            <TwitterIcon />{" "}
          </a>
          <a href="/" className="footer__link">
            {" "}
            <InstagramIcon />{" "}
          </a>
          <a href="/" className="footer__link">
            {" "}
            <YouTubeIcon />{" "}
          </a>
        </div>
        <ul className="footer__links">
            <li className="footer__link"> 
            <a href="/"> Lien Footer</a>
            </li> 
            <li className="footer__link"> 
            <a href="/"> Lien Footer</a>
            </li> 
            <li className="footer__link"> 
            <a href="/"> Lien Footer</a>
            </li> 
            <li className="footer__link"> 
            <a href="/"> Lien Footer</a>
            </li> 
            <li className="footer__link"> 
            <a href="/"> Lien Footer</a>
            </li> 
            <li className="footer__link"> 
            <a href="/"> Lien Footer</a>
            </li> 
            <li className="footer__link"> 
            <a href="/"> Lien Footer</a>
            </li> 
            <li className="footer__link"> 
            <a href="/"> Lien Footer</a>
            </li>

          
                   




        </ul>

        <div className="footer__copy">
            Tous droits réservés
        </div>



      </div>
    </footer>
  );
}

export default Footer;
