import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './style.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };
  
  return (
    <div>
      <h1>주사위 게임</h1>
      <div className='btn_wrap'>
        <Button color="blue" onClick={handleRollClick}>던지기</Button>
        <Button color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      <div className='board_wrap'>
        <Board name="나" color="blue" gameHistory={myHistory} className="board_item"/>
        <Board name="상대" color="red" gameHistory={otherHistory} className="board_item"/>
      </div>
    </div>
  );
}

export default App;
