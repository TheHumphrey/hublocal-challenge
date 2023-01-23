import { Button, ButtonGroup, IconButton, styled } from "@mui/material"
import RoomIcon from '@mui/icons-material/Room'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  MyCompaniesContainer,
  TableContainer,
  TableHeader,
  TableBody,
  TableLineText,
  TableTitleText,
  Title,
  WithCompaniesContainer,
  WithOutCompaniesContainer,
  TableFooter,
  TableFooterFieldsContainer,
  FooterPageField
} from "./style"
import { DialogAddCompany } from "../../components/DialogAddCompany/DialogAddCompany"

const ButtonToTableFooter = styled(Button)`
  height: 28px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;

  text-align: center;
  text-transform: none;
`

const options = []

export const MyCompanies = () => {

  const existCompanies = options.length > 0 ? false : true

  return (
    <MyCompaniesContainer>
      {existCompanies ? (
        <WithCompaniesContainer>
          <DialogAddCompany />
          <TableContainer>
            <TableHeader>
              <TableTitleText>Empresa</TableTitleText>
              <TableTitleText>Qt de Locais</TableTitleText>
              <TableTitleText>Ações</TableTitleText>
            </TableHeader>

            <TableBody>
              <TableLineText>Empresa do Bobzão</TableLineText>
              <TableLineText>10</TableLineText>
              <TableLineText>
                <IconButton
                  onClick={() => { }}
                  color="inherit"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => { }}
                  color="inherit"
                >
                  <RoomIcon />
                </IconButton>
                <IconButton
                  onClick={() => { }}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </TableLineText>
            </TableBody>

            <TableFooter>
              <TableFooterFieldsContainer>
                <FooterPageField>Página: <span>1</span></FooterPageField>
                <FooterPageField withoutRightBorder>Qt por página: <span>10</span></FooterPageField>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                  size="small"
                >
                  <ButtonToTableFooter color="inherit">Anterior</ButtonToTableFooter>
                  <ButtonToTableFooter>Próximo</ButtonToTableFooter>
                </ButtonGroup>
              </TableFooterFieldsContainer>

            </TableFooter>
          </TableContainer>
        </WithCompaniesContainer>
      ) : (
        <WithOutCompaniesContainer>
          <Title>Nenhuma empresa cadastrada!</Title>
          <DialogAddCompany />
        </WithOutCompaniesContainer>
      )}

    </MyCompaniesContainer >
  )
}