import { clientsAxios } from '.'

export const getListClients = async (userId) => {
  return await clientsAxios.post('/Listado', userData)
}

export const createClient = async (clientData, userId) => {
  return await clientsAxios.post('/Crear', userData)
}

export const updateClient = async (clientData, userId) => {
  return await clientsAxios.post('/Actualizar', userData)
}

export const getClientInfo = async (clientId) => {
  return await clientsAxios.get(`/Obtener/${clientId}`)
}

export const deleteClient = async (clientId) => {
  return await clientsAxios.delete(`/Eliminar/${clientId}`)
}


