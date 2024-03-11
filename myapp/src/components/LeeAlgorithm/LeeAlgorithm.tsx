import { Box, Typography } from '@mui/material';
import Board from './Board';
import React, { useState } from 'react';
// import './App.css';

const ROWS = 10;
const COLS = 10;

const Lee_Algorithm = () => {
//   const [grid, setGrid] = useState(createEmptyGrid());
//   const [start, setStart] = useState(null);
//   const [end, setEnd] = useState(null);

//   function createEmptyGrid() {
//     const rows = [];
//     for (let i = 0; i < ROWS; i++) {
//       const row = [];
//       for (let j = 0; j < COLS; j++) {
//         row.push(0); // 0 represents empty cell
//       }
//       rows.push(row);
//     }
//     return rows;
//   }

//   function handleCellClick(row:any, col:any) {
//     // Implement logic to handle cell click
//     // For setting start and end points
//   }

//   function runLeeAlgorithm() {
//     // Implement Lee's algorithm to find the shortest path
//   }

//   return (
//     <div className="App">
//       <h1>Lee's Algorithm Pathfinding</h1>
//       <button onClick={runLeeAlgorithm}>Run Algorithm</button>
//       <div className="grid">
//         {grid.map((row, rowIndex) => (
//           <div key={rowIndex} className="row">
//             {row.map((cell, colIndex) => (
//               <div
//                 key={colIndex}
//                 className={`cell ${cell === 1 ? 'obstacle' : ''}`}
//                 onClick={() => handleCellClick(rowIndex, colIndex)}
//               ></div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
return (
    <Box>
        <Typography component={'h1'}>
            lee algorithm
        </Typography>
        <Board numRows={10} numCols={10} />
    </Box>
)

};

export default Lee_Algorithm;
