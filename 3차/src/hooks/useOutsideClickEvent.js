import { useEffect } from "react";

export default function useOutsideClickEvent(ref, setModalOpen) {
  useEffect(() => {
    console.log(`useEffect()`);

    function handleClickOutside(event) {
      console.log(ref);

      // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(`select의 외부 클릭을 감지!`);
        setModalOpen(false);
      }
    }

    // 현재 document에 이벤트리스너를 추가합니다.
    document.addEventListener("mousedown", handleClickOutside);

    // useEffect 함수가 return하는 것은 마운트 해제하는 것과 동일합니다.
    // 즉, Class 컴포넌트의 componentWillUnmount 생명주기와 동일합니다.
    // 더 이상'mousedown'이벤트가 동작하더라도 handleClickOutside 함수가 실행되지 않습니다.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]); // ref가 변경되면 useEffect를 다시 생성합니다.
}
