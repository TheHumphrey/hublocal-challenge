import { ReactNode, useState } from 'react'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { ButtonToRemove } from './style'
import DeleteIcon from '@mui/icons-material/Delete'
import { Company, CompanyContext, Location } from '../../contexts/CompaniesContext'
import { useContextSelector } from 'use-context-selector'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  }
}));

export const CustomBootstrapDialog = styled(BootstrapDialog)`
  .MuiPaper-root {
    border-radius: 8px;
  }
`

export interface DialogTitleProps {
  id: string;
  children?: ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const CustomBootstrapDialogTitle = styled(BootstrapDialogTitle)`
  background-color: #C90808;
  border-radius: 8px 8px 0px 0px;
  color: white;
  padding-left: 31px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5625rem;
  line-height: 1.875rem;

  text-align: left;
`

const CustomDialogContent = styled(DialogContent)`
  height: 133px;
  padding: 31px !important;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;


  color: #000000;
`

const CustomDialogActions = styled(DialogActions)`
  padding: 18px 34px !important;
`

interface DialogDeleteCompanyProps {
  type: 'company' | 'location'
  currentCompany?: Company
  currentLocation?: Location
}

export const DialogDeleteCompany = ({ type, currentCompany, currentLocation }: DialogDeleteCompanyProps) => {
  const [open, setOpen] = useState(false)

  const { deleteCompanyById, deleteLocationById } = useContextSelector(CompanyContext, (context) => {
    return {
      deleteCompanyById: context.deleteCompanyById,
      deleteLocationById: context.deleteLocationById
    }
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = async () => {
    if (type === 'company') {
      if (!currentCompany) return
      const { id } = currentCompany
      if (!id) return
      await deleteCompanyById(id)
      return handleClose()
    }
    if (type === 'location') {
      if (!currentLocation) return
      const { id } = currentLocation
      if (!id) return
      await deleteLocationById(id)
      return handleClose()
    }
  }

  const isCompany = type === 'company'

  return (
    <div>
      <IconButton
        onClick={handleClickOpen}
        color="error"
      >
        <DeleteIcon />
      </IconButton>

      <CustomBootstrapDialog
        onClose={handleClose}
        aria-labelledby="add-company-dialog"
        maxWidth="sm"
        open={open}
      >
        <CustomBootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Confirmação de exclusão
        </CustomBootstrapDialogTitle>

        <CustomDialogContent dividers>
          {isCompany ? 'A empresa' : 'O local'} <strong>{isCompany ? currentCompany?.name : currentLocation?.name}</strong> será excluída.
          Tem certeza dessa ação?
        </CustomDialogContent>

        <CustomDialogActions>
          <ButtonToRemove
            autoFocus
            onClick={onSubmit}
            height='2.8125rem'
            customWidth='9.1875rem'
          >
            Excluir
          </ButtonToRemove>
        </CustomDialogActions>
      </CustomBootstrapDialog>
    </div >
  )
}