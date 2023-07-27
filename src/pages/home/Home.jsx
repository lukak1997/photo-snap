import "./Home.css";
import arrow1 from '../../assets/arrow1.png'
import arrow2 from '../../assets/arrow2.png'
import arrow3 from '../../assets/blackarrow.png'
import arrow4 from '../../assets/blackarrow1.png'
import {info} from "../../information";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import {featureArray} from '../../information'
import IconComponent from '../../components/iconcomponent/IconComponent'

function Home() {
    return (
      
      <div className="Home">
        <div className="menriver-div-wrapper">
       <div className="home-header-photo-div">
       </div>
       <div className="home-text-div-header">
        <div className="lanier-header-home"></div>
        <h1 className="home-text-div-header-text1">CREATE AND SHARE YOUR PHOTO STORIES. </h1>
        <h4 className="home-text-div-header-text2">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</h4>
        <div className="home-invite-button-header">
          <h4 className="home-text-div-header-text3">GET AN INVITE</h4>
          <div className="arrow-button-home-invite">
            <img className="arrow-button-home-invite-arrow1" src={arrow1} alt="pach-top" />
            <img className="arrow-button-home-invite-arrow2" src={arrow2} alt="pach-top" />
          </div>
        </div>
       </div>
       </div>
       <div className="leptop-div-wrapper">
       <div className="home-middle-photo-div">
       </div>
       <div className="home-text-div-middle">
        <h1 className="home-text-div-middle-text1">BEAUTIFUL STORIES EVERY TIME</h1>
        <h4 className="home-text-div-middle-text2">We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</h4>
        <div className="home-invite-button-middle">
          <h4 className="home-text-div-middle-text3">VIEW THE STORIES</h4>
          <div className="arrow-button-home-invite">
            <img className="arrow-button-home-invite-arrow1" src={arrow3} alt="pach-top" />
            <img className="arrow-button-home-invite-arrow2" src={arrow4} alt="pach-top" />
          </div>
        </div>
       </div>
       </div>
       <div className="cameraman-div-wrapper">
       <div className="home-footer-photo-div">
       </div>
       <div className="home-text-div-bottom">
        <h1 className="home-text-div-bottom-text1">DESIGNED FOR EVERYONE</h1>
        <h4 className="home-text-div-middle-text2">Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </h4>
        <div className="home-invite-button-middle">
          <h4 className="home-text-div-middle-text3">VIEW THE STORIES</h4>
          <div className="arrow-button-home-invite">
            <img className="arrow-button-home-invite-arrow1" src={arrow3} alt="pach-top" />
            <img className="arrow-button-home-invite-arrow2" src={arrow4} alt="pach-top" />
          </div>
        </div>
       </div>
       </div>
        <div className="mapped-home-item1">
       {info.slice(0,4).map((item)=>(
          <ImageComponent data={item.data} title={item.title} creator={item.creator} photo={item.photo} />
        ))}
        </div>
        <div className="mapped-home-item2">
        {info.slice(0,4).map((item)=>(
          <ImageComponent data={item.data} title={item.title} creator={item.creator} comPhoto={item.comPhoto} />
        ))}
        </div>
        <div className="feature-home-div">
        {featureArray.slice(0,3).map((item ,index) => (
            <IconComponent icon={item.icon} offer={item.offer} bio={item.bio} index={index}   />
          ))}
        </div>
      </div>

    );
  }
  
  export default Home;
  