import React from "react";

function Sushi({sushi, eatSushi}) {

  const {name, img_url, price, eaten} = sushi 

  function handleClick() {
    if (!eaten) {
      eatSushi(sushi)
    } else {
      alert("Sorry, you have already eaten this...")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
