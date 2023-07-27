import "./Features.css";
import photograper from "../../pages/assets/features/mobile/hero.jpg";
import photograpertablet from "../../pages/assets/features/tablet/hero.jpg";
import photograpercomputer from "../../pages/assets/features/desktop/Bitmap (1).png";
import BetaFooter from "../../components/betafooter/BetaFooter";
import AfterHeader from "../../components/afterheader/AfterHeader";
import {featureArray} from '../../information'
import IconComponent from "../../components/iconcomponent/IconComponent";
function Features() {
  return (
    <div className="Features">
        <AfterHeader
          photograper={photograper}
          photograpertablet={photograpertablet}
          photograpercomputer={photograpercomputer}
          paragraph={"We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."}
          title={"FEATURES"}
        />
      <div className="wrapper-container">
        <div className="grid-tablet">
          {featureArray.map((item , index) => (
            <IconComponent icon={item.icon} offer={item.offer} bio={item.bio} index={index}   />
          ))}
        </div>
      </div>
      <div className="wrapper-bottom-text">
        <BetaFooter />
      </div>
    </div>
  );
}

export default Features;
