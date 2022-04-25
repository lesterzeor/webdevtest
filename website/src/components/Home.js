import React from "react";
import { data } from "../util/webdevtest-data.js";
import ListItem from "./ListItem";
export default function Home() {
  return (
    <div className="page">
      {data.promotion_objects.map((value, key) => {
        return <ListItem key={key} promoID={key} data={value} />;
      })}
    </div>
  );
}
