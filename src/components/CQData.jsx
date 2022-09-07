import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Buttons = () =>{
  const navigate = useNavigate()

  return(
    <ButtonGroup>
      <IconButton onClick={() => navigate('/client-maintenance')}>
        <EditIcon />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </ButtonGroup>
  )
} 



const data=[
  {identificacion: 1, nombre: 'juan'},
  {identificacion: 2, nombre: 'pedro'},
  {identificacion: 3, nombre: 'jua'},
  {identificacion: 4, nombre: 'juana'},
  {identificacion: 5, nombre: 'juancito'},
  {identificacion: 6, nombre: 'juanPedro'},
  {identificacion: 7, nombre: 'juanjuan'},
]

const CQData = () => {

  const rows = data.map((row) => ({
    identification: row.identificacion,
    name: row.nombre,

  }))

  return (
    <Box>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" >
        <TableHead>
          <TableRow>
            <TableCell>Identification</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.identification}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row">
                {row.identification}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right"><Buttons /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default CQData