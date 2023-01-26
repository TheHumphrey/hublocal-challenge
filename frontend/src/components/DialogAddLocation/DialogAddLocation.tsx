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
import { cepMask, cnpjMask, validateOnlyNumber } from '../../utils/masks'
import { ButtonToAdd, FieldContainer } from '../DialogAddCompany/style'
import { useContextSelector } from 'use-context-selector'
import { CompanyContext, Location } from '../../contexts/CompaniesContext'

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
  currentLocation?: Location
  companyId: string
}

interface InputsFields {
  name: string
  cep: string
  street: string
  number: string
  district: string
  city: string
  state: string
}

type FieldsKey = keyof InputsFields

export const DialogAddLocation = ({ isEditMode, currentLocation, companyId }: DialogAddLocationProps) => {
  const [open, setOpen] = useState(false)
  const [inputs, setInputs] = useState<InputsFields>(currentLocation || {} as InputsFields)

  const { putLocationById, createNewLocation } = useContextSelector(CompanyContext, (context) => {
    return {
      putLocationById: context.putLocationById,
      createNewLocation: context.createNewLocation
    }
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, field: FieldsKey) => {
    if (field === 'cep') {
      return setInputs(state => ({ ...state, [field]: validateOnlyNumber(event.target.value) }))
    }
    setInputs(state => ({ ...state, [field]: event.target.value }))
  }

  const onSubmit = async () => {
    const { cep, city, district, name, number, state, street } = inputs
    if (!name || !cep || !city || !district || !number || !state || !street) return
    if (isEditMode) {
      if (!currentLocation) return
      const { id } = currentLocation
      if (!id) return
      const isEdited = await putLocationById({ id, cep, city, district, name, number, state, street })
      isEdited && handleClose()
      return
    }
    const iscreated = await createNewLocation({ cep, city, district, name, number, state, street }, companyId)
    iscreated && handleClose()
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

          <InputWithLabel
            id="name"
            type="text"
            label="Nome"
            value={inputs.name}
            onChange={(event) => onChangeInput(event, 'name')}
            options={{ width: '100%', size: 'small' }}
          />

          <FieldContainer>
            <InputWithLabel
              id="cep"
              type="text"
              label="CEP"
              value={cepMask(inputs.cep)}
              maxLength={9}
              onChange={(event) => onChangeInput(event, 'cep')}
              options={{ size: 'small' }}
            />

            <InputWithLabel
              id="rua"
              type="text"
              label="Rua"
              value={inputs.street}
              onChange={(event) => onChangeInput(event, 'street')}
              options={{ size: 'small' }}
            />
          </FieldContainer>
          <FieldContainer>
            <InputWithLabel
              id="number"
              type="text"
              label="Número"
              value={inputs.number}
              onChange={(event) => onChangeInput(event, 'number')}
              options={{ size: 'small' }}
            />

            <InputWithLabel
              id="bairro"
              type="text"
              label="Bairro"
              value={inputs.district}
              onChange={(event) => onChangeInput(event, 'district')}
              options={{ size: 'small' }}
            />
          </FieldContainer>
          <FieldContainer>
            <InputWithLabel
              id="city"
              type="text"
              label="Cidade"
              value={inputs.city}
              onChange={(event) => onChangeInput(event, 'city')}
              options={{ size: 'small' }}
            />

            <InputWithLabel
              id="state"
              type="text"
              label="Estado"
              value={inputs.state}
              onChange={(event) => onChangeInput(event, 'state')}
              options={{ size: 'small' }}
            />
          </FieldContainer>

        </CustomDialogContent>
        <CustomDialogActions>
          <ButtonToAdd
            autoFocus
            onClick={onSubmit}
            height='2.8125rem'
            customWidth='9.1875rem'
          >
            {isEditMode ? 'Editar' : 'Adicionar'}
          </ButtonToAdd>
        </CustomDialogActions>
      </CustomBootstrapDialog>
    </div >
  )
}