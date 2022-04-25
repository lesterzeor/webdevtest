import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
export default function ListItem({ data, promoID }) {
  let { promotion_name, promo_image_url, summary, drawings } = data;
  return (
    <div className="list_item">
      <img
        className="promo_img"
        alt="promotion art"
        src={require(`../${promo_image_url}`)}
      />

      <span className="promo_name">
        <Link to={`?promo=promo0${promoID + 1}`}>{promotion_name} </Link>
      </span>

      <br />
      <span className="promotion_summary">{summary}</span>
      <br />
      <span className="promotion_drawing_date">
        Next Drawing Date:{" "}
        {moment(drawings[0].drawing_date).format("MMMM Do YYYY, h:mm:ss a")}
      </span>
    </div>
  );
}
