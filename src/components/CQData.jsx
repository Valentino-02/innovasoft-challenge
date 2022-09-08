import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Snackbar, Alert } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useStateContext } from '../context'
import { deleteClient, getClientInfo } from '../services/client';

const Buttons = ({ clientId, clients}) =>{
  const navigate = useNavigate()
  const [ deleteAlert, setDeleteAlert ] = useState(false)
  const { setClientData, setClients } = useStateContext()

  const handleEditClick = () => {
    getClientInfo(clientId).then((res) => {
      setClientData(res.data)
      navigate('/client-maintenance')
    })
  }

  const handleDeleteClick = () => {
    deleteClient(clientId).then((res) => {
      updateClients(clientId)
      setDeleteAlert(true)
    })
  }

  const updateClients = (clientId) => {
    const newClients = clients.filter(client => client.id !== clientId)
    setClients(newClients)
  }

  return(
    <>
      <ButtonGroup>
        <IconButton onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon onClick={handleDeleteClick}/>
        </IconButton>
      </ButtonGroup>
      <Snackbar
        open={deleteAlert}
        autoHideDuration={200}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="success" color="success" onClose={() => setDeleteAlert(false)}>
          Client deleted!
        </Alert>
      </Snackbar>
    </>
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
            <TableCell>Name</TableCell>
            <TableCell align="right">Identification</TableCell>
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
              {client.nombre + ' ' + client.apellidos}
              </TableCell>
              <TableCell align="right">{client.identificacion}</TableCell>
              <TableCell align="right"><Buttons clientId={client.id} clients={clients} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default CQData