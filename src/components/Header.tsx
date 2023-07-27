import "./Header.css";
import pach from "../assets/Path 2.png";
import rectangle from "../assets/Rectangle.png";
import rectangle2 from "../assets/Rectangle2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="Header">
        <div className="header-div-top">
          <Link className="under" to="/">
            <div className="photo-text-div">
              <div className="img-div-top">
                <img className="pach-top" src={pach} alt="pach-top" />
              </div>
              <h2 className="photo-top">PHOTOSNAP</h2>
            </div>
          </Link>
          <div
            className="button-header"
            onClick={() => {
              handleClick();
            }}
          >
            <img src={rectangle} alt="pach-top" />
            <img src={rectangle2} alt="pach-top" />
          </div>
        </div>
      </div>
      <div className={isVisible ? "menu-top visible" : "menu-top"}>
        <div className="h2-list-top">
          <Link className="under" to="/stories">
            {" "}
            <h2>STORIES</h2>
          </Link>
          <Link className="under" to="/features">
            <h2>FEATURES</h2>
          </Link>
          <Link className="under" to="/pricing">
            <h2>PRICING</h2>
          </Link>
        </div>
        <div className="line-button-div">
          <div className="line"></div>
          <button className="button-top">GET AN INVITE</button>
        </div>
      </div>

      <div className="Header-tablet">
        <Link className="under" to="/">
          <div className="photo-text-div">
            <div className="img-div-top">
              <img className="pach-top" src={pach} alt="pach-top" />
            </div>
            <h2 className="photo-top">PHOTOSNAP</h2>
          </div>{" "}
        </Link>
        <div className="h2-list-top">
          <Link className="under" to="/stories">
            {" "}
            <h2>STORIES</h2>
          </Link>
          <Link className="under" to="/features">
            <h2>FEATURES</h2>
          </Link>
          <Link className="under" to="/pricing">
            <h2>PRICING</h2>
          </Link>
        </div>
        <button className="button-top">GET AN INVITE</button>
      </div>
    </>
  );
}

export default Header;
