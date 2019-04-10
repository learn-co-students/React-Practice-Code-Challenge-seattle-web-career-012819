import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  let fourSushies = props.sushies.slice(props.index, props.index + 4);

  return (
    <Fragment>
      <div className="belt">
        {fourSushies.map(sushi => {
          return (
            <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} />
          );
        })}
        <MoreButton getFour={props.getFour} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
