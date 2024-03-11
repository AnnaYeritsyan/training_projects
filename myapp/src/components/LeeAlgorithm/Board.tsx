import React, { useState } from 'react';
import { Box } from '@mui/material';

type Point = [number, number];
type CellType = 'empty' | 'start' | 'end' | 'obstacle' | 'path';

const Board: React.FC<{ numRows: number; numCols: number }> = ({ numRows, numCols }) => {
  const [board, setBoard] = useState<CellType[][]>(Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => 'empty')
  ));
  const [start, setStart] = useState<Point | null>(null);
  const [end, setEnd] = useState<Point | null>(null);

  const handleCellClick = (row: number, col: number) => {
    if (!start) {
      setStart([row, col]);
      updateCell(row, col, 'start');
    } else if (!end && start && (start[0] !== row || start[1] !== col)) {
      setEnd([row, col]);
      updateCell(row, col, 'end');
      findShortestPath();
    } else {
      toggleObstacle(row, col);
    }
  };

  const updateCell = (row: number, col: number, type: CellType) => {
    const newBoard = [...board];
    newBoard[row][col] = type;
    setBoard(newBoard);
  };

  const toggleObstacle = (row: number, col: number) => {
    const newBoard = [...board];
    if (newBoard[row][col] === 'empty') {
      newBoard[row][col] = 'obstacle';
    } else if (newBoard[row][col] === 'obstacle') {
      newBoard[row][col] = 'empty';
    }
    setBoard(newBoard);
  };

  const findShortestPath = () => {
    if (!end || !start) return;

    const queue: Point[] = [start];
    const distances: number[][] = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => -1));

    distances[start[0]][start[1]] = 0;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    while (queue.length > 0) {
      const [x, y] = queue.shift()!;
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < numRows && ny >= 0 && ny < numCols && board[nx][ny] !== 'obstacle' && distances[nx][ny] === -1) {
          distances[nx][ny] = distances[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }

    // Backtrack from end point to start point to find the shortest path
    let [x, y] = end;
    while (x !== start[0] || y !== start[1]) {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < numRows && ny >= 0 && ny < numCols && distances[nx][ny] === distances[x][y] - 1) {
          x = nx;
          y = ny;
          updateCell(x, y, 'path');
          break;
        }
      }
    }
  };

  const renderCell = (row: number, col: number) => {
    let bgColor = '';
    switch (board[row][col]) {
      case 'start':
        bgColor = 'red';
        break;
      case 'end':
        bgColor = 'green';
        break;
      case 'obstacle':
        bgColor = 'black';
        break;
      case 'path':
        bgColor = 'yellow'; // Color the shortest path cells yellow
        break;
      default:
        bgColor = 'white';
        break;
    }

    return (
      <Box
        key={`${row}-${col}`}
        className="cell"
        sx={{
          border: '1px solid black',
          backgroundColor: bgColor,
          width: '50px',
          height: '50px'
        }}
        onClick={() => handleCellClick(row, col)}
      />
    );
  };

  return (
    <Box className="board">
      {board.map((row, rowIndex) => (
        <Box key={rowIndex} className="row" sx={{ display: 'flex' }}>
          {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
        </Box>
      ))}
    </Box>
  );
};

export default Board;
