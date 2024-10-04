import React, { useState } from 'react';
import {useNavigate} from"react-router-dom";

const NumberPad = ({originalPhone,name,orignalPoint}) => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input === originalPhone) {
        alert(`${name}님께서 적립하셨습니다.`);
    
        handleClear(); // 제출 후 입력값 초기화
        navigate("/purchase")

      } else {
        alert('입력한 번호가 일치하지 않습니다.');
      }


  };

  return (
    <div>
      <div>{input}</div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleButtonClick(number.toString())}
          >
            {number}
          </button>
        ))}
      </div>
      <button onClick={handleClear}>초기화</button>
      <button onClick={handleSubmit}>적립하기</button>
    </div>
  );
};

export default NumberPad;