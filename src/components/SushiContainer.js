import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( { sushis, eatSushi, onClickMore}) {

  console.log(sushis)

  const sushiDetails = sushis.map((sushi) => (
    <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} />
  ))

  return (
    <div className="belt">
      {sushiDetails}
      <MoreButton onClickMore={onClickMore} />
    </div>
  );
}

export default SushiContainer;
