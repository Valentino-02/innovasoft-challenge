import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useStateContext } from '../context'
import { deleteClient, getClientInfo } from '../services/client';

const Buttons = ({ clientId }) =>{
  const navigate = useNavigate()
  const { setClientData, clientData } = useStateContext()

  const handleEditClick = () => {
    getClientInfo(clientId).then((res) => {
      setClientData(res.data)
      console.log(clientData)
      navigate('/client-maintenance')
    })
  }

  const handleDeleteClick = () => {
    deleteClient(clientId).then((res) => console.log(res))
  }

  return(
    <ButtonGroup>
      <IconButton onClick={handleEditClick}>
        <EditIcon />
      </IconButton>
      <IconButton>
        <DeleteIcon onClick={handleDeleteClick}/>
      </IconButton>
    </ButtonGroup>
  )
} 

const CQData = () => {
  const { clients } = useStateContext()

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
          {clients?.map((client) => (
            <TableRow
              key={client.identificacion}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row">
                {client.identificacion}
              </TableCell>
              <TableCell align="right">{client.nombre + ' ' + client.apellidos}</TableCell>
              <TableCell align="right"><Buttons clientId={client.id} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default CQData