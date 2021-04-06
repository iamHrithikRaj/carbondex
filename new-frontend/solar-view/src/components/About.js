import React from "react";
import style from "./styles/about.module.css";
import Card from "./Card.js";
import firstImage from "../assets/first.png";
import secondImage from "../assets/second.png";
import thirdImage from "../assets/third.png";
import House from "../assets/masked-house.png"
import prakul from "../assets/prakul.jpeg"
import hrithik from "../assets/hrithik.jpeg"

const About = () => {
  const props = [
    {
      index: "1",
      imagePath: firstImage,
      heading: "Search for your home",
      content:
        "We use Google Earth imagery to analyze your roof shape and local weather patterns to create a personalized solar plan.",
    },
    {
      index: "2",
      imagePath: secondImage,
      heading: "Personalize your solar analysis",
      content:
        "Adjust your electric bill to fine-tune your savings estimate and the recommended number of solar panels for your home.",
    },
    {
      index: "3",
      imagePath: thirdImage,
      heading: "Compare finance options",
      content:
        "Compare loan, lease, and purchase options for your solar panels based on your results.",
    },
  ];

  return (
    <div className={style.main}>

      <section>
        <div className={style.submain}>
          <h1>How Solar View works?</h1>
          <p>
            Your own personalized solar savings estimator, powered by Google
            Earth imagery
          </p>
        </div>

        {props.map((prop) => (
          <Card
            imagePath={prop.imagePath}
            index={prop.index}
            heading={prop.heading}
            content={prop.content}
          />
        ))}
      </section>


      <section className={style.secondaryBg}>
        <div className={style.submain}>
          <h1>Customized savings estimate</h1>
          <p>
            Solar savings are calculated using roof size and shape, shaded roof
            areas, local weather, local electricity prices, solar costs, and
            estimated incentives over time. Using a sample address, take a look
            at the detailed estimate Project Sunroof can give you.
          </p>
        </div>
        <div className={style.cardContainer}>
          <div className={style.left}>
            <h1>15 Glendale Ave, Somerville, MA 02144, USA</h1>
            <h2>1,479 hours of usable sunlight per year</h2>
            <div className={style.para}>Based on day-to-day analysis of weather patterns</div>
            <h2>497 sq feet available for solar panels</h2>
            <div className={style.para}>Based on 3D modeling of roof and nearby trees</div>
            <h3>$18,000 savings</h3>
            <h4>Estimated net savings for roof over 20 years</h4>

            <a href="/">Check My Roof</a>
          </div>
          <div className={style.right}>
            <img src={House} />
          </div>
        </div>
      </section>


      <section>
        <div className={style.team}>
          <h2 className={style.firsth2}>Our Team</h2>
          <p>Try to hover over their images</p>
          <div className={style.line}></div>
          <div className={style.container}>
            <div className={style.box}>
              <div className={style.imgBx}>
                <img src={prakul} alt="" />
              </div>
              <div className={style.content}>
                <h2>Prakul Tiwari <br /> <span>Senior Developer</span></h2>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.imgBx}>
                <img src={hrithik} alt="" />
              </div>
              <div className={style.content}>
                <h2>Hrithik Raj <br /> <span>Junior Developer</span></h2>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
