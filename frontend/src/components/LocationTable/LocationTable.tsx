import { ButtonGroup, Button, styled } from "@mui/material"
import { DialogAddLocation } from "../DialogAddLocation/DialogAddLocation"
import { DialogDeleteCompany } from "../DialogDeleteCompany/DialogDeleteCompany"
import {
  TableContainer,
  TableHeader,
  TableBody,
  TableLineText,
  TableTitleText,
  TableFooter,
  TableFooterFieldsContainer,
  FooterPageField,
} from "./style"

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

export const LocationTable = () => {
  return (
    <TableContainer>
      <TableHeader>
        <TableTitleText>Local</TableTitleText>
        <TableTitleText>Ações</TableTitleText>
      </TableHeader>

      <TableBody>
        <TableLineText>Local do Janiu Rua 2</TableLineText>
        <TableLineText>
          <DialogAddLocation isEditMode />
          <DialogDeleteCompany type="location" />
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
  )
}