import {
  ImgCardForSale,
  ImgCardForSaleSoldOut,
} from "./components/Img_card_for_sale/imgCardForSale";
import { MyPageNav, Nav } from "./components/nav/nav";

const Test = () => {
  return (
    <>
      <Nav />
      <ImgCardForSale grade="common" />;
      <ImgCardForSaleSoldOut grade="common" />
    </>
  );
};
export default Test;
