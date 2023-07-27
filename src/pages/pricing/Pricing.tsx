import "./pricing.css";
import photograper from "../../pages/assets/pricing/mobile/hero.jpg";
import photograpertablet from "../../pages/assets/pricing/tablet/hero.jpg";
import photograpercomputer from "../../pages/assets/pricing/desktop/hero.jpg";
import { useState } from "react";
import BetaFooter from "../../components/betafooter/BetaFooter";
import AfterHeader from "../../components/afterheader/AfterHeader";
import { pricingArr } from "../../information";

function Pricing() {
  const [visibleButton, setVisibleButton] = useState(true);

  return (
    <div className="Pricing">
      <AfterHeader
        photograper={photograper}
        photograpertablet={photograpertablet}
        photograpercomputer={photograpercomputer}
        paragraph={
          "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        }
        title={"PRICING"}
      />
      <div className="button-month-year-div">
        <h2 className="text-month">Monthly</h2>
        <div
          className={
            visibleButton ? "button-month-year" : "button-month-year-false"
          }
          onClick={() => {
            setVisibleButton(!visibleButton);
          }}
        >
          {visibleButton ? (
            <div className="button-month"></div>
          ) : (
            <div className="button-year"></div>
          )}
        </div>
        <h2 className="text-year">Yearly</h2>
      </div>
      <div className="pricing-plan-div">
        <div className="pricing-plan-div-item1">
          <h1 className="item1-plan-div-text1">Basic</h1>
          <h4 className="item1-plan-div-text2">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </h4>
          <h1 className="item1-plan-div-text3">
            {visibleButton ? "$19.00" : "$190.00"}
          </h1>
          <h4 className="item1-plan-div-text4">
            {visibleButton ? "per month" : "per year"}
          </h4>
          <button className="item1-button-plan-div">PICK PLAN</button>
        </div>
        <div className="pricing-plan-div-item2">
          <div className="lanier-gradient-mobile"></div>
          <h1 className="item2-plan-div-text1">Pro</h1>
          <h4 className="item2-plan-div-text2">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </h4>
          <h1 className="item2-plan-div-text3">
            {visibleButton ? "$39.00" : "$390.00"}
          </h1>
          <h4 className="item2-plan-div-text4">
            {visibleButton ? "per month" : "per year"}
          </h4>
          <button className="item2-button-plan-div">PICK PLAN</button>
        </div>
        <div className="pricing-plan-div-item3">
          <h1 className="item3-plan-div-text1">Business</h1>
          <h4 className="item3-plan-div-text2">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </h4>
          <h1 className="item3-plan-div-text3">
            {visibleButton ? "$99.00" : "$990.00"}
          </h1>
          <h4 className="item3-plan-div-text4">
            {visibleButton ? "per month" : "per year"}
          </h4>
          <button className="item3-button-plan-div">PICK PLAN</button>
        </div>
      </div>
      <div className="pricing-plan-div-tablet">
        <div className="pricing-plan-div-item1-tablet">
          <div className="wrapper-tablet-pricing-plan">
            <h1 className="item1-plan-div-text1-tablet">Basic</h1>
            <h4 className="item1-plan-div-text2-tablet">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </h4>
            <button className="item1-button-plan-div-tablet">PICK PLAN</button>
          </div>
          <div className="wrapper-price-month">
            <h1 className="item1-plan-div-text3-tablet">
              {visibleButton ? "$19.00" : "$190.00"}
            </h1>
            <h4 className="item1-plan-div-text4-tablet">
              {visibleButton ? "per month" : "per year"}
            </h4>
          </div>
        </div>
        <div className="pricing-plan-div-item2-tablet">
          <div className="lanier-gradient-tablet"></div>
          <div className="wrapper-tablet-pricing-plan">
            <h1 className="item2-plan-div-text1-tablet">Pro</h1>
            <h4 className="item2-plan-div-text2-tablet">
              More advanced features available. Recommended for photography
              veterans and professionals.
            </h4>
            <button className="item2-button-plan-div-tablet">PICK PLAN</button>
          </div>
          <div className="wrapper-price-month">
            <h1 className="item2-plan-div-text3-tablet">
              {visibleButton ? "$39.00" : "$390.00"}
            </h1>
            <h4 className="item2-plan-div-text4-tablet">
              {visibleButton ? "per month" : "per year"}
            </h4>
          </div>
        </div>
        <div className="pricing-plan-div-item3-tablet">
          <div className="wrapper-tablet-pricing-plan">
            <h1 className="item3-plan-div-text1-tablet">Business</h1>
            <h4 className="item3-plan-div-text2-tablet">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </h4>
            <button className="item3-button-plan-div-tablet">PICK PLAN</button>
          </div>
          <div className="wrapper-price-month">
            <h1 className="item3-plan-div-text3-tablet">
              {visibleButton ? "$99.00" : "$990.00"}
            </h1>
            <h4 className="item3-plan-div-text4-tablet">
              {visibleButton ? "per month" : "per year"}
            </h4>
          </div>
        </div>
      </div>
      <div className="pricing-feature-div">
        <h1 className="pricing-feature-text">THE FEATURES</h1>
        <div className="pricing-line"></div>

        {pricingArr.map((item) => (
          <div className="mapped-div-pricing-feature">
            <h1 className="header-text-pricing">{item.header}</h1>
            <div className="basic-pro-business-div">
              <h1 className="basic-pro-business-text1">BASIC</h1>
              <h1 className="basic-pro-business-text2">PRO</h1>
              <h1 className="basic-pro-business-text3">BUSINESS</h1>
            </div>
            <div className="pricing-icon-div">
              <img src={item.icon} alt="pach-top" />
              <img src={item.icon2} alt="pach-top" />
              <img src={item.icon3} alt="pach-top" />
            </div>
            <div className="pricing-line-items"></div>
          </div>
        ))}
      </div>

      <div className="pricing-feature-div-tablet">
        <div className="compare-text-div">
          <h2 className="compare-text">COMPARE</h2>
        </div>
        <div className="wrapper-pricing-feature-text-tablet">
          <h1 className="pricing-feature-text-tablet">THE FEATURES</h1>
          <div className="basic-pro-business-div-tablet">
            <h1 className="basic-pro-business-text-tablet">BASIC</h1>
            <h1 className="basic-pro-business-text-tablet">PRO</h1>
            <h1 className="basic-pro-business-text-tablet">BUSINESS</h1>
          </div>
        </div>
        <div className="pricing-line-tablet"></div>

        {pricingArr.map((item) => (
          <>
            <div className="mapped-div-pricing-feature-tablet">
              <h1 className="header-text-pricing-tablet">{item.header}</h1>
              <div className="pricing-icon-div-tablet">
                <img src={item.icon} alt="pach-top" />
                <img src={item.icon2} alt="pach-top" />
                <img src={item.icon3} alt="pach-top" />
              </div>
            </div>
            <div className="pricing-line-items-tablet"></div>
          </>
        ))}
      </div>
      <div className="wrapper-bottom-text">
        <BetaFooter />
      </div>
    </div>
  );
}

export default Pricing;
