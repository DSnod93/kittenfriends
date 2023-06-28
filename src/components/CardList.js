import React from "react";
import Card from "./Card";

const CardList = ({ kitten }) => {
  return (
    <div>
      {kitten.map((user, i) => {
        return (
          <Card
            key={i}
            id={kitten[i].id}
            name={kitten[i].name}
            email={kitten[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
