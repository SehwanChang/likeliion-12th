import React, { useEffect, useState } from "react";

const Counter = () => {
  // count 상태변수, 업데이트 하는 함수 setCount , 초기값 = 0
  const [count, setCount] = useState(0);

  // 빈 의존성 배열을 가진 useEffect: 컴포넌트가 마운트될 때와 언마운트될 때만 실행됨
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
    return () => {
      console.log("컴포넌트가 언마운트되었습니다.");
    };
  }, []);

  //   count를 의존성으로 가진 useEffect: 컴포넌트가 마운트될 때와 count가 변경될 때마다 실행됨
  useEffect(() => {
    console.log("카운트가 변경되었습니다:", count);
    return () => {
      //정리함수(clean-up)
      console.log("카운트 변경 전에 정리 작업을 수행합니다:", count);
    };
  }, [count]);
  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
};

export default Counter;
