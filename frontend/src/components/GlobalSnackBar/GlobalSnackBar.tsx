import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { forwardRef } from 'react'
import { useContextSelector } from 'use-context-selector'
import { GlobalSnackBarContext } from '../../contexts/GlobalSnackBarContext'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const GlobalSnackBar = () => {
  const { handleClose, message, open, type } = useContextSelector(GlobalSnackBarContext, (context) => {
    const { handleClose, message, open, type } = context
    return {
      handleClose,
      message,
      open,
      type
    }
  })

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}