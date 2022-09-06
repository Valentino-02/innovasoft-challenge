import React from 'react'
import { Stack, Divider } from '@mui/material'

import { CMForm, CMHeader } from '../components'

const ClientMaintenance= () => {
  return (
    <Stack divider={<Divider flexItem />} spacing={2}>
      <CMHeader />
      <CMForm />
    </Stack>
  )
}

export default ClientMaintenance