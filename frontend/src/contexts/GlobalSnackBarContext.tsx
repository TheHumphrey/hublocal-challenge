import { AlertColor } from "@mui/material/Alert";
import { ReactNode, useCallback, useState } from "react";
import { createContext } from "use-context-selector";

interface GlobalSnackBarContextType {
  open: boolean
  message: string
  type: AlertColor
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
  handleRenderSnackBar(message: string, type?: AlertColor): void
}

export const GlobalSnackBarContext = createContext({} as GlobalSnackBarContextType)

interface GlobalSnackBarProviderProps {
  children: ReactNode
}

export const GlobalSnackBarProvider = ({ children }: GlobalSnackBarProviderProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('')
  const [type, setType] = useState<AlertColor>('success')

  const handleClose = useCallback((event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }, [])

  function handleRenderSnackBar(message: string, type: AlertColor = 'success') {
    setMessage(message)
    setType(type)
    setOpen(true)
  }

  return (
    <GlobalSnackBarContext.Provider value={{ open, message, type, handleClose, handleRenderSnackBar }}>
      {children}
    </GlobalSnackBarContext.Provider>
  )
}