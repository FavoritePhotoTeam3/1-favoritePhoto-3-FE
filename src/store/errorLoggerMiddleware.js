export const errorLoggerMiddleware = (log = true) => store => next => action => {
  try {
    if (log) {
      console.log('■ Redux Log : 디스패치 액션 로그 > ', action);
    }

    let result = next(action); // 다음 미들웨어나 리듀서로 액션 전달

    if (log) {
      console.log('■ Redux Log : 업데이트된 상태 로깅 > ', store.getState());
    }

    return result;
  } catch (error) {
    if (log) {
      console.error('■ Redux Log : Caught an exception > ', error); // 오류 로깅
    }
    throw error; // 오류 다시 던지기
  }
};