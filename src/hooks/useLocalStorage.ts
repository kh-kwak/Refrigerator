import { useState, useEffect, useCallback } from "react";

// useState와 동일한 함수형 업데이트를 지원하기 위한 타입 정의
type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // 1. localStorage에서 값을 읽어오거나 초기값을 사용하는 함수
  const readValue = useCallback((): T => {
    // 서버 사이드 렌더링 환경에서는 window 객체가 없으므로 초기값 반환
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      // localStorage에 값이 있으면 파싱해서 반환, 없으면 초기값 반환
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      // 파싱 중 에러 발생 시 경고를 출력하고 초기값 반환
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // 2. 컴포넌트의 상태를 관리하기 위한 useState
  // 초기값은 localStorage에서 읽어온 값으로 설정 (lazy initial state)
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // 3. useState의 setter 함수를 래핑하여 localStorage에도 값을 저장
  const setValue: SetValue<T> = useCallback(
    (value) => {
      try {
        // useState의 함수형 업데이트(예: setCount(c => c + 1))를 지원
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        // 상태 업데이트
        setStoredValue(valueToStore);

        // localStorage에 JSON 문자열 형태로 저장
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  // 4. 다른 탭에서 localStorage가 변경되었을 때 상태를 동기화하는 useEffect
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      // 현재 hook이 사용하는 key와 변경된 key가 같을 때만 상태 업데이트
      if (event.key === key) {
        setStoredValue(readValue());
      }
    };

    // storage 이벤트 리스너 등록
    window.addEventListener("storage", handleStorageChange);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, readValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
