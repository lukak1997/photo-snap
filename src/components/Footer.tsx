import "./Footer.css";
import pach from "../assets/Path 2.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <Link className="under" to="/">
          {" "}
          <div className="header-div">
            <div className="img-div">
              <img className="pach" src={pach} alt="pach" />
            </div>
            <h2 className="photo">PHOTOSNAP</h2>
          </div>
        </Link>

        <div className="icon-div">
          <div className="facebook"></div>
          <div className="youtube"></div>
          <div className="twitter"></div>
          <div className="pinterest"></div>
          <div className="instagram"></div>
        </div>

        <ul className="list">
          <Link className="under2" to="/">
            <li>HOME</li>{" "}
          </Link>
          <Link className="under2" to="/stories">
            {" "}
            <li>STORIES</li>{" "}
          </Link>
          <Link className="under2" to="/features">
            {" "}
            <li>FEATURES</li>{" "}
          </Link>
          <Link className="under2" to="/pricing">
            {" "}
            <li>PRICING</li>{" "}
          </Link>
        </ul>

        <div className="invite-div">
          <h2 className="invite-text">GET AN INVITE</h2>
          <div className="arrow">
            <img src={arrow1} alt="arrow1" />
            <img className="arrow1" src={arrow2} alt="arrow2" />
          </div>
        </div>

        <div className="copyright">
          <h2>Copyright 2019. All Rights Reserved</h2>
        </div>
      </div>

      <div className="footer-tablet">
        <div className="header-tablet">
          <div className="header-div-tablet">
            <div className="img-div-tablet">
              <img className="pach-tablet" src={pach} alt="pach" />
            </div>
            <h2 className="photo-tablet">PHOTOSNAP</h2>
            <ul className="list-tablet2">
              <Link className="under2" to="/">
                <li>HOME</li>{" "}
              </Link>
              <Link className="under2" to="/stories">
                {" "}
                <li>STORIES</li>{" "}
              </Link>
              <Link className="under2" to="/features">
                {" "}
                <li>FEATURES</li>{" "}
              </Link>
              <Link className="under2" to="/pricing">
                {" "}
                <li>PRICING</li>{" "}
              </Link>
            </ul>
          </div>

          <div className="invite-div-tablet">
            <h2 className="invite-text-tablet">GET AN INVITE</h2>
            <div className="arrow-tablet">
              <img src={arrow1} alt="arrow1" />
              <img className="arrow1-tablet" src={arrow2} alt="arrow2" />
            </div>
          </div>
        </div>
        <ul className="list-tablet">
          <Link className="under2" to="/">
            <li>HOME</li>{" "}
          </Link>
          <Link className="under2" to="/stories">
            {" "}
            <li>STORIES</li>{" "}
          </Link>
          <Link className="under2" to="/features">
            {" "}
            <li>FEATURES</li>{" "}
          </Link>
          <Link className="under2" to="/pricing">
            {" "}
            <li>PRICING</li>{" "}
          </Link>
        </ul>
        <div className="footer-div-tablet">
          <div className="icon-div-tablet">
            <div className="facebook"></div>
            <div className="youtube"></div>
            <div className="twitter"></div>
            <div className="pinterest"></div>
            <div className="instagram"></div>
          </div>
          <div className="copyright-tablet">
            <h2>Copyright 2019. All Rights Reserved</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
