import "./Stories.css";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import image1 from "../../pages/assets/stories/mobile/moon-of-appalacia.jpg";
import arrow1 from '../../assets/arrow1.png'
import arrow2 from '../../assets/arrow2.png'
import {info} from "../../information";

function Stories() {
  console.log(info)
  return (
    <div className="container">
      <div className="moon-pic">
        <img className="moon-pic" src={image1} alt="pach-top" />
      </div>
      
    <div className="Stories">
      <div className="image-tablet">
        <div className="moon-pic-tablet-div">
      <div className="moon-pic-tablet">
      <div className="story-info-div-tablet">
        <h2 className="story-info-div1">LAST MONTH’S FEATURED STORY</h2>
        <h2 className="story-info-div2">HAZY FULL MOON OF APPALACHIA</h2>
        <div className="creator-text-div">
        <h2 className="story-info-div3">March 2nd 2020</h2>
        <h2 className="story-info-div4">by John Appleseed</h2>
        </div>
        <h2 className="story-info-div5">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </h2>
        <div className='read-me-div-story'>
            <h2>READ THE STORY</h2>
            <div className="arrow-div">
              <img className="arrow1"  src={arrow1} alt="pach-top" />
              <img src={arrow2} alt="pach-top" />
            </div>
            </div>
      </div>
      </div>
      </div>
      </div>
      <div className="wrapper">
      <div className="story-info-div">
        <h2 className="story-info-div1">LAST MONTH’S FEATURED STORY</h2>
        <h2 className="story-info-div2">HAZY FULL MOON OF APPALACHIA</h2>
        <div className="creator-text-div">
        <h2 className="story-info-div3">March 2nd 2020</h2>
        <h2 className="story-info-div4">by John Appleseed</h2>
        </div>
        <h2 className="story-info-div5">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </h2>
        <div className='read-me-div-story'>
            <h2>READ THE STORY</h2>
            <div className="arrow-div">
              <img className="arrow1"  src={arrow1} alt="pach-top" />
              <img src={arrow2} alt="pach-top" />
            </div>
            </div>
      </div>
      </div>
      <div className="wrapper">
        <div className="grid-stories">
        {info.map((item)=>(
          <ImageComponent data={item.data} title={item.title} creator={item.creator} photo={item.photo} />
        ))}
        </div>
        <div className="grid-stories-2">
        {info.map((item)=>(
          <ImageComponent data={item.data} title={item.title} creator={item.creator} comPhoto={item.comPhoto} />
        ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Stories;
