export const errorLoggerMiddleware = store => next => action => {
  try {
    console.log('Dispatching action:', action); // 액션 로깅
    let result = next(action); // 다음 미들웨어나 리듀서로 액션 전달
    console.log('Next state:', store.getState()); // 업데이트된 상태 로깅
    return result;
  } catch (error) {
    console.error('Caught an exception:', error); // 오류 로깅
    // 여기에서 외부 로깅 서비스로 오류 전송 가능 (예: Sentry, LogRocket 등)
    throw error; // 오류 다시 던지기
  }
};