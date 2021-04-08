import React from "react";
import style from "./styles/dashboard.module.css";
import { useState } from "react";
import co2 from "../assets/ic_co2.png";
import car from "../assets/ic_car.png";
import tree from "../assets/ic_tree.png";

const Dashboard = ({ state }) => {
  // eslint-disable-next-line
  const [info, setInfo] = useState({
    hours: "1,200",
    area: "12,000",
    savings: "28,900",
    size: "34",
    co2: "2.8",
    tree: "70.9",
    cars: "0.6",
  });

  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14017.960361251766!2d77.343446!3d28.55504255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1617819014824!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  function Iframe(props) {
    return (
      <div
        className={style.map}
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

  return (
    <>
      <div className={style.container}>
        <Iframe iframe={iframe} />
        <div className={style.card}>
          <p>
            <span>{info.hours}</span> hrs of usable sunlight per year Based on
            day-to-day analysis of weather patterns.
          </p>
          <p>
            <span>{info.area}</span> sq. feet available for solar panels Based
            on 3D modeling of your roof and nearby trees
          </p>
          <p>
            <span>${info.savings}</span> savings Estimated net savings for your
            roof over 20 years
          </p>
        </div>
      </div>
      <div className={style.secondContainer}>
        <section className={style.gridContainer}>
          <div className={style.gridItem1}>
            <h1>YOUR AVERAGE MONTHLY ELECTRIC BILL</h1>
            <p>
              We use your bill to estimate how much electricity you use based on
              typical utility rates in your area.
            </p>
            <select name="" id="bill">
              <option value="4">4kw/hr</option>
              <option value="5">5kw/hr</option>
              <option value="6">6kw/hr</option>
              <option value="7">7kw/hr</option>
              <option value="8">8kw/hr</option>
              <option value="9">9kw/hr</option>
              <option value="10">10kw/hr</option>
              <option value="11">11kw/hr</option>
              <option value="12">12kw/hr</option>
              <option value="13">13kw/hr</option>
              <option value="14">14kw/hr</option>
            </select>
          </div>

          <div className={style.gridItem2}>
            <h1>YOUR RECOMMENDED SOLAR INSTALLATION SIZE</h1>
            <p>
              This size will cover about 94% of your electricity usage. Solar
              installations are sized in kilowatts (kW).
            </p>
            <h2>{info.size} Kw</h2>
          </div>

          <div className={style.gridItem3}>
            <h1>YOUR POTENTIAL ENVIRONMENTAL IMPACT</h1>
            <p>
              Estimated annual environmental impact of the recommended solar
              installation size.
            </p>
            <div className={style.images}>
              <div>
                <img src={co2} alt="" />
                <span>
                  Carbon dioxide <h1>{info.co2}</h1> metric tons
                </span>
              </div>
              <p>=</p>
              <div>
                <img src={car} alt="" />
                <span>
                  Passenger cars <h1>{info.cars}</h1> taken off the road for 1
                  yr
                </span>
              </div>
              <p>=</p>
              <div>
                <img src={tree} alt="" />
                <span>
                  Tree seedlings
                  <h1>{info.tree}</h1>
                  grown for 10 yrs
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
