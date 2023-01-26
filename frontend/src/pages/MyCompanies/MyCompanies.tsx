import {
  Button,
  ButtonGroup,
  IconButton,
  styled
} from "@mui/material"
import RoomIcon from '@mui/icons-material/Room'

import { DialogAddCompany } from "../../components/DialogAddCompany/DialogAddCompany"
import { DialogDeleteCompany } from "../../components/DialogDeleteCompany/DialogDeleteCompany"

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
  FooterPageField,
  ButtonContainer,
  TableLineContainer
} from "./style"
import { useNavigate } from "react-router-dom"
import { CompanyContext } from "../../contexts/CompaniesContext"
import { useContextSelector } from "use-context-selector"
import { useEffect } from "react"

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

export const MyCompanies = () => {
  const navigate = useNavigate()
  const { companies, getCompanies } = useContextSelector(CompanyContext, (context) => {
    return {
      companies: context.companies,
      getCompanies: context.getCompanies
    }
  })

  useEffect(() => {
    getCompanies()
  }, [])

  const existCompanies = companies.length > 0 ? true : false

  return (
    <MyCompaniesContainer>
      {existCompanies ? (
        <WithCompaniesContainer>
          <ButtonContainer>
            <DialogAddCompany />
          </ButtonContainer>

          <TableContainer>
            <TableHeader>
              <TableTitleText>Empresa</TableTitleText>
              <TableTitleText>Qt de Locais</TableTitleText>
              <TableTitleText>Ações</TableTitleText>
            </TableHeader>

            <TableBody>
              {
                companies?.map(company => (
                  <TableLineContainer key={company.id}>
                    <TableLineText >{company.name}</TableLineText>
                    <TableLineText>10</TableLineText>
                    <TableLineText>
                      <DialogAddCompany isEditMode currentCompany={company} />
                      <IconButton
                        onClick={() => navigate(`./location/${company.id}`, { replace: false })}
                        color="inherit"
                      >
                        <RoomIcon />
                      </IconButton>
                      <DialogDeleteCompany type="company" currentCompany={company} />
                    </TableLineText>
                  </TableLineContainer>
                ))
              }
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