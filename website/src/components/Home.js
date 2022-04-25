import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getPromo } from "../util/helpers";
export default function Home() {
  const [searchParams] = useSearchParams();
  let promoID = searchParams.get("promo");
  const getPromotion = async () => {
    try {
      let promotion = await getPromo(promoID);
      console.log("got promo data back", promotion);
    } catch (error) {
      console.error("errorrr in home", error);
    }
  };
  useEffect(() => {
    getPromotion();
  }, []);
  return <div>Home Page</div>;
}
