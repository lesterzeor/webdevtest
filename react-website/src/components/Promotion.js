import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPromo } from "../util/helpers";
import { Result } from "antd";
import Loader from "./Loader";
import moment from "moment";
export default function Promotion() {
  const [promotion, setpromotion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  let promoID = searchParams.get("promo");
  const getPromotion = async () => {
    setLoading(true);
    try {
      let promo = await getPromo(promoID);
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
    <div className="promo_page">
      {loading ? (
        <Loader />
      ) : promotion ? (
        <div className="pomotion_container">
          <span className="mobile_title">
            The Next Entry Deadline is <br />
            {moment(promotion.drawings[0].entry_deadline).format(
              "dddd, MMMM D, YYYY"
            )}
          </span>
          <img
            className="promo_img"
            alt="promotion art"
            src={require(`../${promotion.promo_image_url}`)}
          />
          <span className="promotion_name">{promotion.promotion_name}</span>
          {/* <div className="promotion_body"> */}
          <span className="promotion_summary">{promotion.summary}</span>
          <span className="table_title">Drawing Schedule</span>
          <table className="custom_table drawing_table">
            <thead>
              <tr>
                <th>PRIZE</th>
                <th>ENTRY DEADLINE</th>
                <th>DRAWING DATE</th>
              </tr>
            </thead>
            <tbody>
              {promotion.drawings.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.prize.replace("Cash Prize", "")}</td>
                    <td>
                      {moment(value.entry_deadline).format(
                        "dddd, MMMM D, YYYY"
                      )}
                    </td>
                    <td>
                      {moment(value.drawing_date).format("dddd, MMMM D, YYYY")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
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
            <thead>
              <tr>
                <th>ENTRY NUMBER</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {promotion.entries.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.entry_number}</td>
                    <td>{moment(value.date).format("dddd, MMMM D, YYYY")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* </div> */}
        </div>
      ) : (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, this promotion does not exist."
        />
      )}
    </div>
  );
}
