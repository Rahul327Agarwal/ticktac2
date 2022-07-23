import "./styles.css";
import { useEffect, useState } from "react";

var winner1;
var winner2;
export default function Board() {
  const [player, setPlayer] = useState("Player1");
  const [data, setData] = useState([]);

  // function to assign value to the column
  const handleclick = (id) => {
    // check if that place is already used.
    if (data[id] !== undefined) alert("You can not click on this column");
    else {
      var text;
      // provide value to the column based on who has clicked
      if (player === "Player1") text = "X";
      else text = "O";
      // get the id of the column.
      let col_id = document.getElementById(id);
      // chnage text of the column
      col_id.innerHTML = text;
      // change the backround of the column.
      let backcolor = player === "Player1" ? "yellow" : "green";
      col_id.style.backgroundColor = backcolor;
      // set the value of column to the dataset
      data[id] = text;
      setData(data);
      // chnage the player turn
      let turn = player === "Player1" ? "Player2" : "Player1";
      setPlayer(turn);
    }
  };

  const checkwinner = () => {
    if (data.length !== 9) alert("Please fill all the column first");
    else {
      // check in the rows for the winner
      for (let i = 0; i < 9; i += 3) {
        let pos = i;
        if (data[pos] === data[pos + 1] && data[pos] === data[pos + 2]) {
          const val = data[pos];
          if (val === "X") winner1 = "Player1";
          else winner2 = "Player2";
        }
      }

      // check in the column for the winner
      for (let i = 0; i < 3; i++) {
        let pos = i;
        if (data[pos] === data[pos + 3] && data[pos] === data[pos + 6]) {
          const val = data[pos];
          if (val === "X") winner1 = "Player1";
          else winner2 = "Player2";
        }
      }

      // check in the left diagonal for the winner

      if (data[0] === data[4] && data[0] === data[8]) {
        const val = data[0];
        if (val === "X") winner1 = "Player1";
        else winner2 = "Player2";
      }

      // check in the right diagonal for the winner

      if (data[2] === data[4] && data[2] === data[6]) {
        const val = data[2];
        if (val === "X") winner1 = "Player1";
        else winner2 = "Player2";
      }

      if (winner1 !== undefined && winner2 !== undefined)
        alert("It's a tie match");
      else if (winner1 !== undefined) alert("Hurray winner is Player1");
      else if (winner2 !== undefined) alert("Hurray winner is Player2");
      else alert("Great match no one is winner");

      // cleaning the column
      setData([]);
      for (let i = 0; i < 9; i++)
        document.getElementById(i).style.backgroundColor = "white";
      // setting player again to player1
      setPlayer("Player1");
    }
  };

  // usefeect to make data empty at first place
  useEffect(() => setData([]), []);
  return (
    <div>
      <p>Current player is {player}</p>
      <table className="center" id="table">
        <tr>
          <td id="0" onClick={() => handleclick(0)}>
            {data[0] !== undefined && data[0]}
          </td>
          <td id="1" onClick={() => handleclick(1)}>
            {data[1] !== undefined && data[1]}
          </td>
          <td id="2" onClick={() => handleclick(2)}>
            {data[2] !== undefined && data[2]}
          </td>
        </tr>
        <tr>
          <td id="3" onClick={() => handleclick(3)}>
            {data[3] !== undefined && data[3]}
          </td>
          <td id="4" onClick={() => handleclick(4)}>
            {data[4] !== undefined && data[4]}
          </td>
          <td id="5" onClick={() => handleclick(5)}>
            {data[5] !== undefined && data[5]}
          </td>
        </tr>
        <tr>
          <td id="6" onClick={() => handleclick(6)}>
            {data[6] !== undefined && data[6]}
          </td>
          <td id="7" onClick={() => handleclick(7)}>
            {data[7] !== undefined && data[7]}
          </td>
          <td id="8" onClick={() => handleclick(8)}>
            {data[8] !== undefined && data[8]}
          </td>
        </tr>
      </table>
      <button onClick={() => checkwinner()}>click me to see the winer</button>
    </div>
  );
}
