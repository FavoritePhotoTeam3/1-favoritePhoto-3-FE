import { useDispatch } from "react-redux";

import RandomPointModal from "../../components/common/randomPoint/randomPointModal";
import { randomModalController } from "./randomPointSlice";
import useRandomPoint from "./randomPointQuery";

const RandomPoint = () => {
  const { getRandomPoint } = useRandomPoint();
  const dispatch = useDispatch();
  const modalHandler = () => {
    dispatch(randomModalController());
  };
  const boxClick = () => {
    getRandomPoint();
  };

  return (
    <>
      <RandomPointModal modalHandler={modalHandler} boxClick={boxClick} />
    </>
  );
};
export default RandomPoint;
