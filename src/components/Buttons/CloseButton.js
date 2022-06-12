import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

export const CloseButton = (props) => (<IconButton aria-label="delete" {...props}>
    <CloseIcon/>
  </IconButton>
)
