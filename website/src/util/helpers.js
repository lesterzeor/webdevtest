import { data } from "./webdevtest-data.js";

// since promotional objects do not contain unique id, data is being pulled based on object position inside promotiuon_objects array

export const getPromo = (promoID) => {
  let { promotion_objects } = data;
  //removed text and coinverted to interger and substracted by one to be able to accurately read postion in object array.
  let promotion_id = parseInt(promoID.replace("promo0", "")) - 1;
  let promotion = promotion_objects[promotion_id];

  //if promotion does not exist send back error

  if (!promotion) {
    // eslint-disable-next-line no-throw-literal
    throw "Promotion does not exist";
  }
  return promotion;
};
