import { useState, useEffect } from "react";
import axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UsersTable() {
  const url = "https://reqres.in/api/users?page=1";
  const [pages, setPages] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        const { data, page } = response.data;
        console.log(data, page);
        setData(data);
        setPages(page);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // console.log(APIusers());

  const handleDeleteUser = id => {
    const newData = data.filter(data => data.id !== id);
    setData(newData);
    console.log(newData);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Avatar</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">
                <img src={row.avatar} alt={`Avatar de ${row.first_name}`} />
              </TableCell>
              <TableCell align="right">{row.first_name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell component="th" scope="row">
                <Button onClick={() => handleDeleteUser(row.id)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
