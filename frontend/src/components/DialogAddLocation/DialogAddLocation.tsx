import { ReactNode, useState } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { InputBase, InputWithLabel } from '../BaseInput/BaseInput'
import EditIcon from '@mui/icons-material/Edit'
import { cnpjMask } from '../../utils/masks'
import { ButtonToAdd, FieldContainer } from '../DialogAddCompany/style'

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

const CustomBootstrapDialogTitle = styled(BootstrapDialogTitle)`
  background-color: #0385FD;
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
  height: 403px;
  padding: 31px !important;
`

const CustomDialogActions = styled(DialogActions)`
  padding: 18px 34px !important;
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

interface DialogAddLocationProps {
  isEditMode?: boolean;
}

export const DialogAddLocation = ({ isEditMode }: DialogAddLocationProps) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {
        isEditMode ? (
          <IconButton
            onClick={handleClickOpen}
            color="inherit"
          >
            <EditIcon />
          </IconButton>
        ) : (
          <ButtonToAdd onClick={handleClickOpen} customWidth="16.125rem" height="3.125rem">Adicionar Local</ButtonToAdd>
        )
      }
      <CustomBootstrapDialog
        onClose={handleClose}
        aria-labelledby="add-company-dialog"
        maxWidth="lg"
        open={open}
      >
        <CustomBootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {
            isEditMode ? `Editar: ${'Nome do local aqui'}` : 'Adicionar local'
          }
        </CustomBootstrapDialogTitle>
        <CustomDialogContent dividers>

          <InputWithLabel id="name" type="text" label="Nome" options={{ width: '100%', size: 'small' }} />

          <FieldContainer>
            <InputWithLabel
              id="cep"
              type="text"
              label="CEP"
              options={{ size: 'small' }}
            />

            <InputWithLabel
              id="rua"
              type="text"
              label="Rua"
              options={{ size: 'small' }}
            />
          </FieldContainer>
          <FieldContainer>
            <InputWithLabel
              id="number"
              type="text"
              label="Número"
              options={{ size: 'small' }}
            />

            <InputWithLabel
              id="bairro"
              type="text"
              label="Bairro"
              options={{ size: 'small' }}
            />
          </FieldContainer>
          <FieldContainer>
            <InputWithLabel
              id="city"
              type="text"
              label="Cidade"
              options={{ size: 'small' }}
            />

            <InputWithLabel
              id="state"
              type="text"
              label="Estado"
              options={{ size: 'small' }}
            />
          </FieldContainer>

        </CustomDialogContent>
        <CustomDialogActions>
          <ButtonToAdd
            autoFocus
            onClick={handleClose}
            height='2.8125rem'
            customWidth='9.1875rem'
          >
            Adicionar
          </ButtonToAdd>
        </CustomDialogActions>
      </CustomBootstrapDialog>
    </div >
  )
}