import React from "react";

const Cards = (props) => {
    const imgSrc="https://n2.sdlcdn.com/imgs/g/4/3/2016_humidifier_fan_mini_handheld_water_air_cooling_fan_an_w0484_blue_with_mist_1_-16d6c.jpg"

    function handleClick(){
        props.setSrc(imgSrc);
        props.setOpen(!props.open)
    }
    
  return (
    <div className="card">
      <img src={imgSrc} alt="Denim Jeans"  />
      <h1>Table Fan</h1>
      <p className="price">1000 Rs</p>
      <p>Excellent Table Fan.</p>
      <p>
        <button onClick={handleClick} >Click</button>
      </p>
    </div>
  );
};

export default Cards;
