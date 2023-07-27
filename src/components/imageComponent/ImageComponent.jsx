import "./ImageComponent.css";
import arrow3 from "../../assets/arrow1.png";
import arrow4 from "../../assets/arrow2.png";


function ImageComponent(props) {

  return (
      <div className="ImageComponent">
          <div className="information-div1">
            <div className="information-div">
              <div className="information-div-text">
                <h2 className="information-div-text3">{props.date}</h2>
                <h2 className="information-div-text1">{props.title}</h2>
                <h2 className="information-div-text2">{props.creator}</h2>
              </div>
              <div className="information-div-read">
                <div className="information-div-line"></div>
                <div className="read-me-div">
                  <h2>READ STORY</h2>
                  <div className="arrow-div">
                    <img className="arrow1" src={arrow3} alt="pach-top" />
                    <img src={arrow4} alt="pach-top" />
                  </div>
                </div>
              </div>
            </div>
            <img className="photograpy" src={props.photo} alt="pach-top" />
            <img className="photograpy2" src={props.comPhoto} alt="pach-top" />
          </div>
          <div className="lanier-hover"></div>
      </div>
  );
}

export default ImageComponent;
