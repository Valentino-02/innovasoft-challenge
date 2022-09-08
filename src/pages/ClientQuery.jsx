import React, { useEffect } from 'react'
import { Stack, Divider } from '@mui/material'

import { CQData, CQHeader, CQSearcher } from '../components'
import { useStateContext } from '../context'

const ClientQuery = () => {
  const { setClients } = useStateContext()

  useEffect(() => {
    setClients([])
  }, [])

  return (
    <Stack divider={<Divider flexItem />} spacing={2}>
      <CQHeader />
      <CQSearcher />
      <CQData />
    </Stack>
  )
}

export default ClientQuery