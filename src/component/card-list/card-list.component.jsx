import React from "react";
import "./card-list.styles.css";
import Card from "../card/Card.component";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card monster={monster} key={monster.name} />;
      })}
    </div>
  );
};

export default CardList;
