import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { PlaceHolderItem } from 'store/users/users.slice';
import { useState, useEffect } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
 
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface TablesProps {
  fetchData: PlaceHolderItem[];
  setFetchData: React.Dispatch<React.SetStateAction<PlaceHolderItem[]>>;
}

const Tables: React.FC<TablesProps> = ({ fetchData, setFetchData }) => {
  const [edit, setEdit] = useState<number | null>(null);
  const [nameValue, setNameValue] = useState<string>('');
  const [usernameValue, setUsernameValue] = useState<string>('');

  useEffect(() => {
    setNameValue('hello');
    setUsernameValue('');
  }, [fetchData]);

  const handleEdit = (e: PlaceHolderItem) => {
    setEdit(e.id);
    setNameValue(e.name);
    setUsernameValue(e.username);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') {
      setNameValue(e.target.value);
    } else if (e.target.name === 'username') {
      setUsernameValue(e.target.value);
    }
  };

  const handleDelete = (e:any) =>{
    console.log(e)
  const fil = fetchData.filter((el:any)=>{
    return el.id !== e.id
      })
      setFetchData(fil)
  }

  const handleSave = (id: number) => {
    const updatedData = fetchData.map(item => {
      if (item.id === id) {
        return { ...item, name: nameValue, username: usernameValue };
      }
      return item;
    });

    setFetchData(updatedData);
    setEdit(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Surname</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchData.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {edit === row.id ? (
                  <input
                    type="text"
                    name="name"
                    value={nameValue}
                    onChange={handleChange}
                  />
                ) : (
                  row.name
                )}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {edit === row.id ? (
                  <input
                    type="text"
                    name="username"
                    value={usernameValue}
                    onChange={handleChange}
                  />
                ) : (
                  row.username
                )}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {edit === row.id ? (
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={() => handleSave(row.id)}
                  >
                    Save
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(row)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(row)}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
