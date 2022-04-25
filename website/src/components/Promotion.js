import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPromo } from "../util/helpers";
import moment from "moment";
export default function Home() {
  const [promotion, setpromotion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  let promoID = searchParams.get("promo");
  const getPromotion = async () => {
    setLoading(true);
    try {
      let promo = await getPromo(promoID);
      console.log("got promo data back", promo);
      setpromotion(promo);
      setLoading(false);
    } catch (error) {
      console.error("errorrr in home", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getPromotion();
  }, []);
  return (
    <div className="page">
      {loading ? (
        <div>loading...</div>
      ) : promotion ? (
        <div className="pomotion_container">
          <img
            className="promo_img"
            alt="promotion art"
            src={require(`../${promotion.promo_image_url}`)}
          />
          <span className="promotion_name">{promotion.promotion_name}</span>
          <span className="promotion_summary">{promotion.summary}</span>
          <span className="table_title">Drawing Schedule</span>
          <table className="custom_table drawing_table">
            <tr>
              <th>PRIZE</th>
              <th>ENTRY DEADLINE</th>
              <th>DRAWING DATE</th>
            </tr>
            {promotion.drawings.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.prize.replace("Cash Prize", "")}</td>
                  <td>
                    {moment(value.entry_deadline).format("dddd, MMMM D, YYYY")}
                  </td>
                  <td>
                    {moment(value.drawing_date).format("dddd, MMMM D, YYYY")}
                  </td>
                </tr>
              );
            })}
          </table>
          <span className="promotion_summary entry_info">
            {promotion.entry_info}
          </span>
          <span className="table_title">
            Your Total Tickets Entered: {promotion.entries.length}
          </span>
          <span className="promotion_summary entries_subtext">
            All entries are locked in at the time they are submitted and cannot
            be deleted.
          </span>
          <table className="custom_table entries_table">
            <tr>
              <th>ENTRY NUMBER</th>
              <th>DATE</th>
            </tr>
            {promotion.entries.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.entry_number}</td>
                  <td>{moment(value.date).format("dddd, MMMM D, YYYY")}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <div>Promotion not found</div>
      )}
    </div>
  );
}
