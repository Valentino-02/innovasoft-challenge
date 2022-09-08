import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Stack, Divider, Box } from '@mui/material'

import { CMForm, CMHeader } from '../components'
import { useStateContext } from '../context'
import { getListInterests } from '../services/interests'
import { createClient, getListClients, updateClient } from '../services/client';

const ClientMaintenance= () => {
  const navigate = useNavigate()
  const { interests, setInterests } = useStateContext()

  useEffect(() => {
    if (interests.length === 0) {
      getListInterests()
      .then((res) => {
        let newInterests = res.data
        setInterests(interests => interests.concat(newInterests))
      })
    }
  }, [interests, setInterests])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    let clientData = {
      nombre: formData.get('firstName'),
      apellidos: formData.get('lastName'),
      identificacion: formData.get('identification'),
      celular: formData.get('cellphone'),
      otroTelefono: formData.get('otherPhone'),
      direccion: formData.get('adress'),
      fNacimiento: formData.get('birthdate'),
      fAfiliacion: formData.get('affiliationDate'),
      sexo: formData.get('gender'),
      resennaPersonal: formData.get('review'),
      imagen: "",
      interesFK: formData.get('interest'),
    }

    getListClients({identificacion: clientData.identificacion})
    .then((res) => {
      let list = res.data
      list.length === 0 ? createClient(clientData) : updateClient(clientData)
    })
    
    navigate('/client-query')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack divider={<Divider flexItem />} spacing={2}>
        <CMHeader />
        <CMForm interests={interests}/>
      </Stack>
    </Box>
  )
}

export default ClientMaintenance