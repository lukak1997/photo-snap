import "./AfterHeader.css";

function AfterHeader(props: any) {
  return (
    <div className="wrapper-photo-text">
      <div className="image-photograper-div">
        <img
          className="image-photograper"
          src={props.photograper}
          alt="pach-top"
        />
      </div>
      <div className="image-photograper-div-tablet">
        <img
          className="image-photograper-tablet"
          src={props.photograpertablet}
          alt="pach-top"
        />
        <img
          className="image-photograper-computer"
          src={props.photograpercomputer}
          alt="pach-top"
        />
      </div>
      <div className="feature-div-text">
        <div className="linear"></div>
        <div className="linear-tablet"></div>
        <div className="wrapper-feature-div-text1">
          <h2 className="feature-div-text1">{props.title}</h2>
          <h4 className="feature-div-text2">{props.paragraph}</h4>
        </div>
      </div>
    </div>
  );
}

export default AfterHeader;
