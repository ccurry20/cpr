import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>SERVICES</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="img/truck-1.jpg"
              text="Maintenance Lights?"
              label="Maintenance"
              path="/services"
            />
            <CardItem
              src="img/truck-2.jpg"
              text="Injectors, Turbos, Cooling System?"
              label="Injectors"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="img/truck-3.jpg"
              text="Hard Start or No Start?"
              label="Hard Start"
              path="/services"
            />
            <CardItem
              src="img/mechanic-1.jpg"
              text="Performance/Aftermarket Installation"
              label="Installation"
              path="/services"
            />
            <CardItem
              src="img/tires.jpg"
              text="Tire Service?"
              label="Tires"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
