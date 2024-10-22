import { useEffect } from 'react';

export const useLogQueryStatus = (
  { hasNextPage, isFetchingNextPage, isLoading, isError, error },
  { log = false } = {} // log 매개변수 추가하여 제어 가능하게 설정
) => {
  useEffect(() => {
    if (log) {
      console.log("React Query Status:");
      console.log("hasNextPage:", hasNextPage);
      console.log("isFetchingNextPage:", isFetchingNextPage);
      console.log("isLoading:", isLoading);
      console.log("isError:", isError);

      if (isError && error) {
        console.error("Error fetching data:", error.message || error);
      }
    }
  }, [hasNextPage, isFetchingNextPage, isLoading, isError, error, log]);
};
