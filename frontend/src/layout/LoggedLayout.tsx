import BusinessIcon from '@mui/icons-material/Business';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  ButtonGroup,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList, Paper,
  Popper
} from "@mui/material";
import { useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { LoginContext } from "../contexts/LoginContext";
import { LayoutSelect } from "./components/LayoutSelect";
import {
  CompanyName,
  CompanyNameContainer,
  LayoutContainer,
  LayoutHeaderContainer,
  UserAvatar,
  UserContainer,
  UserName
} from "./style";

export const LoggedLayout = () => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)


  const location = useLocation()

  const isOnLocationPage = location?.pathname?.includes('location')

  const { logOut, user } = useContextSelector(LoginContext, (context) => {
    return {
      logOut: context.logOut,
      user: context.user
    }
  })

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };



  const limitedNameToEightLenght = (name: string) => name?.substring(0, 8)

  return (
    <LayoutContainer>
      <LayoutHeaderContainer>
        <CompanyNameContainer isOnLocationPage={isOnLocationPage}>
          <BusinessIcon />
          {
            isOnLocationPage ? (
              <LayoutSelect />
            ) : (
              <CompanyName>
                Minhas Empresas
              </CompanyName>
            )
          }

        </CompanyNameContainer>

        <UserContainer>
          <UserAvatar src="https://preview.redd.it/vnmxhdajmrt71.png?auto=webp&s=6ab0ab0b1209daf51266471e371f7a708a26ad27" />
          <UserName>{limitedNameToEightLenght(user.name)}</UserName>
          <>
            <ButtonGroup aria-label="split button" ref={anchorRef}>
              <IconButton
                onClick={handleToggle}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
              }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        <MenuItem
                          onClick={logOut}
                        >
                          LogOut
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        </UserContainer>
      </LayoutHeaderContainer>
      <Outlet />
    </LayoutContainer>
  )
}