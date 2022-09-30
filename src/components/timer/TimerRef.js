import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const TimerRef = () => {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current) return null;
    // Để update giá trị cho timerRef
    timerRef.current = setInterval(() => {
      // Nếu để setCounter(counter+1) thì nó sẽ không cập nhật ngay lập tức vào cái counter này luôn đâu. Lần re render tiếp theo nó mới cập nhật
      setCounter((counter) => counter + 1);
    }, 1000);
  };

  const handleStop = () => {
    // lấy giá trị timerRef bằng việc truy xuất vào property current (timerRef.current)
    clearInterval(timerRef.current);
    // ta clearInterval rồi ta phải xét lại giá trị từ đầu khi ta xét vậy nó sẽ update lại ngay lập tức không bị re render lại
    timerRef.current = null;
  };

  // Khi chúng ta rời component này tức là chúng ta không dùng nữa chúng ta phải clearInterval() đi (Vd: nó đang chạy mà mình chuyển qua trang khác). Để làm việc đó ta sử dụng useEffect()

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <h3>Timer: {counter}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default TimerRef;
