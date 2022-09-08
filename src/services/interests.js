import { interestsAxios } from '.'

export const getListInterests = async () => {
  return await interestsAxios.get(`/Listado`)
}