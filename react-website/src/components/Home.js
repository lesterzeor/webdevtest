import React from "react";
import { data } from "../util/webdevtest-data.js";
import { useSearchParams } from "react-router-dom";
import Promotion from "./Promotion";
import ListItem from "./ListItem";
import "../css/home.scss";
export default function Home() {
  const [searchParams] = useSearchParams();
  let promoID = searchParams.get("promo");
  return (
    <div>
      {promoID ? (
        <Promotion />
      ) : (
        <div className="home_list_page">
          <div className="home_list_container">
            {data.promotion_objects.map((value, key) => {
              return <ListItem key={key} promoID={key} data={value} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
