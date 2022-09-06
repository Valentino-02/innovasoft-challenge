import React from 'react'
import { Stack, Divider } from '@mui/material'

import { CQData, CQHeader, CQSearcher } from '../components'

const ClientQuery = () => {
  return (
    <Stack divider={<Divider flexItem />} spacing={2}>
      <CQHeader />
      <CQSearcher />
      <CQData />
    </Stack>
  )
}

export default ClientQuery