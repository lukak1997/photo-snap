import "./IconComponent.css";

function IconComponent(props: any) {
  return (
    <div className="IconComponent">
      <div className={`icon-mapped-div ${props.index === 1 ? "index1" : ""}`}>
        <img className="feature-div-icon" src={props.icon} alt="pach-top" />
        <h1 className="feature-offer">{props.offer}</h1>
        <h4 className="feature-bio">{props.bio}</h4>
      </div>
    </div>
  );
}

export default IconComponent;
