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
  Box,
  IconButton,
  Collapse,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

export default function UsersTable() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [deleteUser, setDeleteUser] = useState({});
  const url = "https://reqres.in/api/users";

  useEffect(() => {
    axios
      .get(`${url}?page=${page}`)
      .then(response => {
        const { data, page, total_pages } = response.data;
        setData(data);
        setPage(page);
        setTotalPages(total_pages);
      })
      .catch(() => {
        setData([]);
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
            <AlertTitle>Eliminado exitosamente ✅</AlertTitle>
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
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Apellido</TableCell>
              <TableCell align="center">Correo</TableCell>
              <TableCell align="center">Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <img
                    style={{ width: "64px", borderRadius: "50%" }}
                    data-testid={`user__img-${row.id}`}
                    src={row.avatar}
                    alt={`Avatar de ${row.first_name}`}
                  />
                </TableCell>
                <TableCell align="center">{row.first_name}</TableCell>
                <TableCell align="center">{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  <Button onClick={() => handleDeleteUser(row)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Anterior
        </Button>
        <p>{`Página ${page}`}</p>
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
