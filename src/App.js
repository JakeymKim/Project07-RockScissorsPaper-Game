import { useState } from 'react';
import './App.css';
import Box from "./component/Box";


const choice = {
  rock:{
    name:"Rock",
    img:"https://etherrock.com/7.png"
  },
  scissors:{
    name:"Scissors",
    img:"https://www.pngmart.com/files/1/Scissors-Icon-Clip-Art-PNG.png"
  },
  paper:{
    name:"Paper",
    img:"https://blog.kakaocdn.net/dn/bTMXnM/btqvQEUXqHo/RBemAVv3mL4b4lYildaaVK/img.png"
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    if(user.name == computer.name) {
      return "Draw";
    }else if(user.name == "Rock") {
        return computer.name == "Scissors" ? "Win" : "Lose";
    }else if(user.name == "Scissors") {
      return computer.name == "Paper" ? "Win" : "Lose";
    }else if(user.name == "Paper") {
      return computer.name == "Rock" ? "Win" : "Lose";
    }
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>

      <div className="main">
        <button type="button" class="btn btn-secondary" onClick={() => play("scissors")}>가위</button>
        <button type="button" class="btn btn-secondary" onClick={() => play("rock")}>바위</button>
        <button type="button" class="btn btn-secondary" onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
