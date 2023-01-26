import { NativeSelect, styled } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import { CompanyContext } from "../../contexts/CompaniesContext"

const CustomNativeSelect = styled(NativeSelect)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;

  text-align: center;
  color: #000;
  .css-ft6u0u-MuiInputBase-root-MuiInput-root:before {
    display: none !important;
  }
`

export const LayoutSelect = () => {

  const navigate = useNavigate()
  const { companies, onChangeSelectedCompanyOnLayout, companySelectedId } = useContextSelector(CompanyContext, (context) => {
    return {
      onChangeSelectedCompanyOnLayout: context.onChangeSelectedCompanyOnLayout,
      companies: context.companies,
      companySelectedId: context.companySelectedId
    }
  })

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event) return
    onChangeSelectedCompanyOnLayout(event)
    navigate(`../companies/location/${event.target.value}`, { replace: true })
  }

  const selected = companies.find(company => company.id === companySelectedId)

  return (
    <CustomNativeSelect
      defaultValue={30}
      inputProps={{
        name: 'companyes',
        id: 'uncontrolled-native',
      }}
      onChange={onChangeSelect}
      value={selected}
    >
      {
        companies?.map(company => (
          <option value={company?.id} key={company?.id}>{company.name}</option>
        ))
      }

    </CustomNativeSelect>
  )
}