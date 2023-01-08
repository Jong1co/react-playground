import { observer } from "mobx-react";
import React from "react";
import store from "../../client";
import { action, autorun } from "mobx";

export const TestMobX = observer(() => {
  // autorun(() => {
  console.log(store.total);
  // });

  // autorun(() => {
  console.log(store.start);
  // });

  // console.log(store.total);

  return (
    <div>
      <input type='text' />
      <button onClick={() => store.setPrice(5)}>price</button>
      <button onClick={() => store.setAmount(5)}>amount</button>
      <button onClick={() => store.setStart({ lat: 10, lgt: 20, title: "hi" })}>location</button>
    </div>
  );
});
