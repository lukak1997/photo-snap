import "./BetaFooter.css";
import arrow3 from "../../assets/arrow1.png";
import arrow4 from "../../assets/arrow2.png";

function BetaFooter() {
  return (
    <div className="features-bottom-text-div">
      <div className="linear-beta"></div>
      <div className="linear-beta-tablet"></div>
      <h1 className="feature-bottom-beta">
        WE’RE IN BETA. GET YOUR INVITE TODAY!
      </h1>
      <div className="read-me-div-feature">
        <h2>GET AN INVITE</h2>
        <div className="arrow-div-feature">
          <img className="arrow1" src={arrow3} alt="pach-top" />
          <img src={arrow4} alt="pach-top" />
        </div>
      </div>
    </div>
  );
}

export default BetaFooter;
