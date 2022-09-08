import { clientsAxios } from '.'

export const getListClients = async (clientData) => {
  let reqBody = clientData
  reqBody.usuarioId = localStorage.getItem('userid')
  return await clientsAxios.post('/Listado', reqBody)
}

export const createClient = async (clientData) => {
  let reqBody = clientData
  reqBody.usuarioId = localStorage.getItem('userid')
  return await clientsAxios.post('/Crear', reqBody)
}

export const updateClient = async (clientData) => {
  let reqBody = clientData
  reqBody.usuarioId = localStorage.getItem('userid')
  return await clientsAxios.post('/Actualizar', reqBody)
}

export const getClientInfo = async (clientId) => {
  return await clientsAxios.get(`/Obtener/${clientId}`)
}

export const deleteClient = async (clientId) => {
  return await clientsAxios.delete(`/Eliminar/${clientId}`)
}


