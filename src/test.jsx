import { DropdownNoneBorder } from "./components/commons/dropdown_normal/DropdownNormal";
import {
  ImgCardForSale,
  ImgCardForSaleSoldOut,
} from "./components/Img_card_for_sale/imgCardForSale";

const Test = () => {
  return (
    <>
      <Nav />
      <ImgCardForSale grade="common" />;
      <DropdownNoneBorder />
      {/* <RandomPoint /> */}
    </>
  );
};
export default Test;
