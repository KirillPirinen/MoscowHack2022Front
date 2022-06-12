import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ActionAcception(
  { 
    title = `Use Google's location service?`, 
    description, 
    buttons = [
      { children: 'Отмена', onClick: () => void 0 },
      { children: 'Удалить', onClick: () => void 0 }
    ] }
) {

  return (
    <div>
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
        {description && (
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        )}
        </DialogContent>
        <DialogActions>
          {buttons?.map(button => <Button {...button} />)}
        </DialogActions>
    </div>
  );
}
