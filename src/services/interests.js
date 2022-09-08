import { interestsAxios } from '.'

export const getInterests = async (clientId) => {
  return await clientsAxios.get(`/Listado`)
}