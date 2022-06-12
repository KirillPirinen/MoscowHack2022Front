import React, { useCallback } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { getMessagesSelector } from '../../redux/selectors';
import { clearMessages } from '../../redux/actions/messages.ac';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AppSnackBar = () => {
  const messages = useSelector(getMessagesSelector)
  const handleClose = useCallback(() => clearMessages())
  return (
    <Snackbar open={messages.status} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={messages.level || 'error' } sx={{ width: '100%' }}>
        {messages?.message}
        {Boolean(messages.errors?.length) && ": " + messages.errors?.map(err => err.msg)?.toString()}
      </Alert>
    </Snackbar>
  )
}
