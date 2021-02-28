import './App.css';
import Cell from "./cell";
import createTable from "./setup";

function App() {
  const table = createTable();
  const transposed = table[0].map((_, colIndex) => table.map(row => row[colIndex]));

  return (
    <div className="App">
      <div className="col header">
        {["B", "I", "N", "G", "O"].map(cell => {
          return <div className="bingo-cell header">
            {cell}
            </div>
        })}
      </div>
      {transposed.map((col, i) => {
        return <div className="col" key={`col-${i}`}>
            {col.map((row, j) => {
              return <div className="row">
                  <Cell key={row} num={row} isFree={false && i === 2 && j === 2}/>
                </div>
            })}
          </div>
      })}
    </div>
  );
}

export default App;
