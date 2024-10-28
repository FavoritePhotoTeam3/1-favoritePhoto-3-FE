import { useDispatch } from "react-redux";

import { POINT } from "../../api/point";
import { APIrequestPending } from "../../route/auth/authSlice";

const useRandomPoint = () => {
  const dispatch = useDispatch();

  const getRandomPoint = async () => {
    dispatch(APIrequestPending({ isPending: true }));
    try {
      const response = await POINT.post("/draw");
      const { point } = response.data;
      alert(`${point}P를 획득하셨습니다!`);
      dispatch(APIrequestPending({ isPending: false }));
      window.location.reload();
    } catch (e) {
      const {
        data: {
          data: { message },
        },
      } = e.response;
      alert(message);
      dispatch(APIrequestPending({ isPending: false }));
      window.location.reload();
    }
  };

  return { getRandomPoint };
};
export default useRandomPoint;

// 2024 10 26 성공 및 실패시 메시지 및 리다이랙션 구현.
