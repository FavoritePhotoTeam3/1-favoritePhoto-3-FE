import { DropdownNoneBorder } from "./components/commons/dropdown_normal/DropdownNormal";
import {
  ImgCardForSale,
  ImgCardForSaleSoldOut,
} from "./components/Img_card_for_sale/imgCardForSale";
import ImgCardMy from "./components/imgcard_my/ImgCardMy";
import RandomPoint from "./components/modals/randomPoint/randomPoint";
import { Nav } from "./components/nav/nav";

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
