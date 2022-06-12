import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { MailOutline, ContactPhone } from '@mui/icons-material';
import { copyToClipboard } from '../../../../utils/copyToClipboard'

export const TooltipButtonMail = ({ email = '1@mail.ru' }) => (
  <Tooltip title={email} arrow>
    <IconButton onClick={() => copyToClipboard(email, 'Почта скопирована')}><MailOutline /></IconButton>
  </Tooltip>
)

export const TooltipButtonPhone = ({ phone = '79250000000' }) => (
  <Tooltip title={phone} arrow>
    <IconButton onClick={() => copyToClipboard(phone, 'Телефон скопирован')}><ContactPhone /></IconButton>
  </Tooltip>
)
