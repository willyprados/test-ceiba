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
  Alert,
  AlertTitle,
  Stack,
  Box,
  IconButton,
  Collapse,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

export default function UsersTable() {
  const url = "https://reqres.in/api/users";
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [deleteUser, setDeleteUser] = useState({});

  useEffect(() => {
    axios
      .get(`${url}?page=${page}`)
      .then(response => {
        const { data, page, total_pages } = response.data;
        console.log(data, page, total_pages);
        setData(data);
        setPage(page);
        setTotalPages(total_pages);
      })
      .catch(err => {
        console.log(err);
      });
  }, [page]);

  const APIdelete = user => {
    axios.delete(`${url}/${user.id}`).then(() => {
      setDeleteUser(user);
    });
  };
  const handleDeleteUser = user => {
    const newData = data.filter(data => data.id !== user.id);
    setData(newData);
    APIdelete(user);
    console.log(newData);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Collapse in={Boolean(deleteUser.first_name)}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setDeleteUser({});
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Success</AlertTitle>
            {`Se elimino el usuario ${deleteUser.first_name} ${deleteUser.last_name}`}
          </Alert>
        </Collapse>
      </Box>
      <TableContainer component={Paper}>
        <Table
          data-testid="users__table"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
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
                  <img
                    data-testid={`user__img-${row.id}`}
                    src={row.avatar}
                    alt={`Avatar de ${row.first_name}`}
                  />
                </TableCell>
                <TableCell align="right">{row.first_name}</TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell component="th" scope="row">
                  <Button onClick={() => handleDeleteUser(row)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center  " }}>
        <Button
          disabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Anterior
        </Button>
        <p>{`Página #${page}`}</p>
        <Button
          disabled={page >= totalPages}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Siguiente
        </Button>
      </div>
    </>
  );
}
