import { IconButton, styled } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { LocationContainer, LocationTableAndButtonContainer, LocationTitle } from "./style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DialogAddLocation } from "../../components/DialogAddLocation/DialogAddLocation";
import { LocationTable } from "../../components/LocationTable/LocationTable";
import { ButtonContainer } from "../MyCompanies/style";

const CustomIconButton = styled(IconButton)`
  display: flex;
  flex-direction: row;
  gap: 8px;

  position: absolute;
  top: 25px;
  left: 35px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.25rem;

  text-align: center;

  color: #4D4D4D;

  :hover {
    background-color: transparent;
  }
`

const locations = []

export const MyLocations = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const isRenderTableOrNot = locations.length !== 0

  return (
    <LocationContainer>
      <CustomIconButton
        onClick={() => navigate(-1)}
        color="inherit"
      >
        <ArrowBackIcon />
        Minhas Empresas
      </CustomIconButton>

      {
        isRenderTableOrNot ? (
          <>
            <LocationTitle>Nenhum local cadastrado!</LocationTitle>

            <DialogAddLocation />
          </>
        ) : (
          <LocationTableAndButtonContainer>
            <ButtonContainer>
              <DialogAddLocation />
            </ButtonContainer>
            <LocationTable />
          </LocationTableAndButtonContainer>
        )
      }

    </LocationContainer>
  )
}