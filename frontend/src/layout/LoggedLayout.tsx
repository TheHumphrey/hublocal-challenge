import { CompanyName, CompanyNameContainer, LayoutContainer, LayoutHeaderContainer, UserAvatar, UserContainer, UserName } from "./style"
import BusinessIcon from '@mui/icons-material/Business';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ButtonGroup, ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";

export const LoggedLayout = () => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)

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

  return (
    <LayoutContainer>
      <LayoutHeaderContainer>
        <CompanyNameContainer>
          <BusinessIcon />
          <CompanyName>
            Minhas Empresas
          </CompanyName>
        </CompanyNameContainer>

        <UserContainer>
          <UserAvatar src="https://www.conveniomedicoveterinario.com.br/wp-content/uploads/2022/08/dia-do-husky-siberiano-convenio-veterinario-comvet.jpg" />
          <UserName>Janiu</UserName>
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
                          onClick={() => { }}
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